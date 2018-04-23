var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var { isNullOrUndefined } = require('util');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var db = require('../db');
var User = require('./User');

// CREATES A NEW USER
router.post('/', function (req, res) {
    var newUser = new User(
        req.body.personalNumber, 
        req.body.email, 
        req.body.status);

    db.query(
        'INSERT INTO `User` SET ?', 
        newUser, 
        function(err, results, fields) {
            if (err) return res.status(500).send("There was a problem adding the information to the database:\n" + err);
            res.status(200).send(results);
        }
    );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) { 
    var sql = 'SELECT `id`, `personalNumber`, `email`, `status` FROM `User`';

    if (!isNullOrUndefined(req.query.sort_by)) {
        var sortCols = req.query.sort_by.split(',');
        var whereArray = [];
        var regex = /^(asc|desc)\((\w+)\)$/i;

        for (i = 0; i < sortCols.length; i++) {
            var match = regex.exec(sortCols[i]);

            if (match.length == 3) {
                whereArray.push(match[2].toLowerCase() + ' ' + match[1].toUpperCase());
            }
        }

        if (whereArray.length > 0) {
            sql += 'WHERE ' + whereArray.join(', ');
        }
        
/*
        if (['id', 'personalNumber', 'email', 'status'].includes(req.query.sort_by)) {

        }*/
    }

    req.query.limit = req.query.limit || 100;
    sql += ' LIMIT ' + req.query.limit;

    if (!isNullOrUndefined(req.query.offset)) {
        sql += ' OFFSET ' + req.query.offset;
    }

    db.query(
        sql, 
        function(err, results, fields) {
            if (err) return res.status(500).send("There was a problem finding the users:\n" + err);
            res.status(200).send(results);
        }
    );
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    db.query(
        'SELECT `id`, `personalNumber`, `email`, `status` FROM `User` WHERE `id` = ?', 
        req.params.id, 
        function(err, results, fields) {
            if (err) return res.status(500).send("There was a problem finding the user.\n" + err);
            if (!results) return res.status(404).send("No user found.");
            res.status(200).send(results);
        }
    );
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    db.query(
        'DELETE FROM `User` WHERE `id` = ?', 
        req.params.id,
        function(err, results, fields) {
            if (err) return res.status(500).send("There was a problem deleting the user.\n" + err);
            res.status(200).send("User was deleted.");
        }
    );
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    db.query(
        'UPDATE `User` SET `personalNumber` = ?, `email` = ?, `status` = ? WHERE `id` = ?', 
        [
            req.body.personalNumber,
            req.body.email,
            req.body.status,
            req.params.id
        ], 
        function(err, results, fields) {
            if (err) return res.status(500).send("There was a problem updating the user.\n" + err);
            res.status(200).send(results);
        }
    );
});

module.exports = router;