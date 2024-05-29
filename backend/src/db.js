const Pool = require('pg').Pool;

const pool = new Pool({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    port: process.env.dbport,
    database: process.env.db,
});

module.exports = pool;
