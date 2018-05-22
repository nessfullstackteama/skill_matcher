const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const Permission = require('./Permission');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/permission', (req, res, next) => {
        let sql = 'SELECT `id`, `name` FROM `Permission`';
        sql += jsonQuery2Sql(req.query) || '';

        db.query(
            sql, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the permissions: ${err.message}`, err));
                }

                res.send(results);
                next();
            }
        );
    });

    server.get('/permission/:id', (req, res, next) => {
        db.query(
            'SELECT `id`, `name` FROM `Permission` WHERE `id` = ?', 
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

    server.post('/permission/', (req, res, next) => {
        var newSkill = new Permission(req.body.name);

        db.query(
            'INSERT INTO `Permission` SET ?', 
            newSkill, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem adding the information to the database: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    server.put('/permission/', (req, res, next) => {
        db.query(
            'UPDATE `Permission` SET `name` = ? WHERE `id` = ?', 
            [
                req.body.name,
                req.params.id
            ], 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem updating the permission: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    server.del('/permission/', (req, res, next) => {
        db.query(
            'DELETE FROM `Permission` WHERE `id` = ?', 
            req.params.id,
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem deleting the permission: ${err.message}`, err));
                }

                res.send("Permission was deleted.");
            }
        );
    });
}