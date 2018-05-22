const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const UserGroup = require('./UserGroup');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/usergroups', (req, res, next) => {
        let sql = 'SELECT `id`, `name` FROM `UserGroup`';
        sql += jsonQuery2Sql(req.query) || '';

        db.query(
            sql, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the user groups: ${err.message}`, err));
                }

                res.send(results);
                next();
            }
        );
    });

    server.get('/usergroups/:id', (req, res, next) => {
        db.query(
            'SELECT `id`, `name` FROM `UserGroup` WHERE `id` = ?', 
            req.params.id, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the user group: ${err.message}`, err));
                }
                
                if (!results)
                    return next(new errors.NotFoundError('No user group found.'));

                res.send(results);
            }
        );
    });

    server.post('/usergroups/', (req, res, next) => {
        var newUser = new UserGroup(req.body.name, null);

        db.query(
            'INSERT INTO `UserGroup` SET ?', 
            newUser, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem adding the information to the database: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    server.put('/usergroups/', (req, res, next) => {
        db.query(
            'UPDATE `UserGroup` SET `name` = ? WHERE `id` = ?', 
            [
                req.body.name,
                req.params.id
            ], 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem updating the user group: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    server.del('/usergroups/', (req, res, next) => {
        db.query(
            'DELETE FROM `UserGroup` WHERE `id` = ?', 
            req.params.id,
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem deleting the user group: ${err.message}`, err));
                }

                res.send("User group was deleted.");
            }
        );
    });

    /* User Group Permissions */

    server.get('/usergroups/:groupid/permissions', (req, res, next) => {
        db.query(
            'SELECT `p`.`id`, `p`.`name` FROM `Permission` `p` INNER JOIN `UserGroupPermissions` `u` WHERE `u`.`id` = ?', 
            req.params.groupid, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the permissions: ${err.message}`, err));
                }
                
                if (!results)
                    return next(new errors.NotFoundError('No permissions found.'));

                res.send(results);
            }
        );
    });

    server.get('/usergroups/:groupid/permissions/:id', (req, res, next) => {
        db.query(
            'SELECT `p`.`id`, `p`.`name` FROM `Permission` `p` INNER JOIN `UserGroupPermissions` `u` WHERE `u`.`id` = ? AND `p`.`id` = ?', 
            req.params.groupid,
            req.params.id, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the permission: ${err.message}`, err));
                }
                
                if (!results)
                    return next(new errors.NotFoundError('No permission found.'));

                res.send(results);
            }
        );
    });
}