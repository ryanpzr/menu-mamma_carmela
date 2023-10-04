const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD

});

module.exports = pool;
