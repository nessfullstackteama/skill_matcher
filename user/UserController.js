var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
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
    db.query(
        'SELECT `id`, `personalNumber`, `email`, `status` FROM `User`', 
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