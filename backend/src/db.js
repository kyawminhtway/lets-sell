import pg from 'pg';

const env = process.env;
const pool = new pg.Pool({
    database: env.db,
    host: env.dbhost,
    user: env.dbuser,
    password: env.dbpassword,
    port: env.dbport,
});

export default pool;