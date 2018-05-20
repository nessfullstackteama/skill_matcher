const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const UserGroup = require('./UserGroup');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/usergroups', (req, res, next) => {

    });

    server.get('/usergroups/:id', (req, res, next) => {

    });

    server.post('/usergroups/', (req, res, next) => {

    });

    server.put('/usergroups/', (req, res, next) => {

    });

    server.del('/usergroups/', (req, res, next) => {

    });
}