var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-1.crcc7dn3iq4d.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'movie_info'
});

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To DB');
}); 
module.exports = connection;

