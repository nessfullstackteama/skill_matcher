const restify = require('restify');
const errors = require('restify-errors');
const { isNullOrUndefined } = require('util');
const db = require('../db');
const Permission = require('./Permission');
const { jsonQuery2Sql } = require('../utils');

module.exports = (server) => {
    server.get('/permission', (req, res, next) => {

    });

    server.get('/permission/:id', (req, res, next) => {

    });

    server.post('/permission/', (req, res, next) => {

    });

    server.put('/permission/', (req, res, next) => {

    });

    server.del('/permission/', (req, res, next) => {

    });
}