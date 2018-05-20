const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const Skill = require('./Skill');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/skills', (req, res, next) => {
        let sql = 'SELECT `id`, `title`, `description`, `parentId`, `status` FROM `Skill`';
        sql += jsonQuery2Sql(req.query) || '';

        db.query(
            sql, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the skills: ${err.message}`, err));
                }

                res.send(results);
                next();
            }
        );
    });

    server.get('/skills/:id', (req, res, next) => {
        db.query(
            'SELECT `id`, `title`, `description`, `parentId`, `status` FROM `Skill` WHERE `id` = ?', 
            req.params.id, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the skill: ${err.message}`, err));
                }
                
                if (!results)
                    return next(new errors.NotFoundError('No skill found.'));

                res.send(results);
            }
        );
    });

    server.post('/skills/', (req, res, next) => {
        var newSkill = new Skill(
            req.body.title, 
            req.body.description, 
            req.body.parentId,
            req.body.status);

        db.query(
            'INSERT INTO `Skill` SET ?', 
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

    server.put('/skills/', (req, res, next) => {
        db.query(
            'UPDATE `Skill` SET `title` = ?, `description` = ?, `parentId` = ?, `status` = ? WHERE `id` = ?', 
            [
                req.body.title, 
                req.body.description, 
                req.body.parentId,
                req.body.status,
                req.params.id
            ], 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem updating the skill: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    server.del('/skills/', (req, res, next) => {
        db.query(
            'DELETE FROM `Skill` WHERE `id` = ?', 
            req.params.id,
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem deleting the skill: ${err.message}`, err));
                }

                res.send("Skill was deleted.");
            }
        );
    });
}