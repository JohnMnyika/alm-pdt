const { Pool } = require('pg');

const pool = new Pool({
  user: 'spike',
  host: 'localhost',
  database: 'almonproduct',
  password: 'spike123',
  port: 5432, 
});

module.exports = pool;
