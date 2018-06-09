// Global import
const mysql = require('mysql');

// Local import
const { mysqlLocal } = require('../0_config');

const dbConnection = mysql.createConnection(mysqlLocal);

dbConnection.connect((err) => {
  if (err) {
    console.log('[8_mysqlRDS] detected error: ', err);
  } else {
    console.log('[8_mysqlRDS] activated...');
  }
});

module.exports = dbConnection;
