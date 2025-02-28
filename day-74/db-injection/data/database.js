const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: '1234',
  multipleStatements: true
})

module.exports = pool;
//  multipleStatements: false => FOR AVOIDING SQL INJECTION SITUATIONS
