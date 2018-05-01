const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const User = require('./Skill');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/skills', (req, res, next) => {

    });

    server.get('/skills/:id', (req, res, next) => {

    });

    server.post('/skills/', (req, res, next) => {

    });

    server.put('/skills/', (req, res, next) => {

    });

    server.del('/skills/', (req, res, next) => {

    });
}