var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'skillmatcher_db_1',
    port: 3306,
    user: 'skillmatcher',
    password: 'skillmatcher',
    database: 'skill_matcher'
});
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
*/
module.exports = con;