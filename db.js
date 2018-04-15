var mysql = require('mysql');

var con = mysql.createConnection({
    host: '192.168.99.100',
    port: 32769,
    user: 'root',
    password: 'N355KdcSql',
    database: 'skill_matcher'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;