const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const User = require('./User');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    /**
     * RETURNS ALL THE USERS IN THE DATABASE
     */
    server.get('/users', (req, res, next) => {
        let sql = 'SELECT `id`, `personalNumber`, `email`, `status` FROM `User`';
        sql += jsonQuery2Sql(req.query) || '';

        db.query(
            sql, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the users: ${err.message}`, err));
                }

                res.send(results);
                next();
            }
        );
    });

    /**
     * GETS A SINGLE USER FROM THE DATABASE
     */
    server.get('/users/:id', (req, res, next) => {
        db.query(
            'SELECT `id`, `personalNumber`, `email`, `status` FROM `User` WHERE `id` = ?', 
            req.params.id, 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem finding the user: ${err.message}`, err));
                }
                
                if (!results)
                    return next(new errors.NotFoundError('No user found.'));

                res.send(results);
            }
        );
    });

    /**
     * CREATES A NEW USER
     */
    server.post('/users/', (req, res, next) => {
        var newUser = new User(
            req.body.personalNumber, 
            req.body.email, 
            req.body.status, 
            null);

        db.query(
            'INSERT INTO `User` SET ?', 
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

    /**
     * UPDATES A SINGLE USER IN THE DATABASE
     */
    server.put('/users/:id', (req, res, next) => {
        db.query(
            'UPDATE `User` SET `personalNumber` = ?, `email` = ?, `status` = ? WHERE `id` = ?', 
            [
                req.body.personalNumber,
                req.body.email,
                req.body.status,
                req.params.id
            ], 
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem updating the user: ${err.message}`, err));
                }

                res.send(results);
            }
        );
    });

    /**
     * DELETES A USER FROM THE DATABASE
     */
    server.del('/users/:id', (req, res) => {
        db.query(
            'DELETE FROM `User` WHERE `id` = ?', 
            req.params.id,
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return next(new errors.InvalidContentError(`There was a problem deleting the user: ${err.message}`, err));
                }

                res.send("User was deleted.");
            }
        );
    });
}