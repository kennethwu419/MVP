const { Pool, Client } = require('pg');
const config = require('../../config.js');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: config.database,
  user: config.user,
  password: config.password
});



module.exports = pool;