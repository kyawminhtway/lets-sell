const pool = require('../db');
const queries = require('./queries');

const getAppUsers = (req, res) => {
    pool.query(queries.getAppUsers, (err, data) => {
        if(err) throw err;
        res.status(200).json(data.rows);
    });
};

module.exports = {
    getAppUsers,
};
