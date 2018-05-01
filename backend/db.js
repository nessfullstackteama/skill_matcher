const config = require('./config');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: config.db.host, // 'skillmatcher_db_1',
    port: config.db.port,
    user: config.db.skillmatcher, //'skillmatcher',
    password: config.db.password, // 'skillmatcher',
    database: config.db.database //'skill_matcher'
});
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
*/
module.exports = con;