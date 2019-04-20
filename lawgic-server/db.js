var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root123',
    database: 'judicial_pendency'
});
module.exports = connection;