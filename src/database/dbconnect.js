// const mysql = require('mysql2')
const mysql = require('mysql2');

const client = mysql.createConnection({host:'localhost', user: 'root', database: 'vmo'});
console.log('connected client');

module.exports = client.promise();

