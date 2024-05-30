import pool from '../../db.js';
import queries from './queries.js';

const getAppUser = (req, res) => {
    const params = req.query;
    const callback = params.id ? queries.getAppUserById : queries.getAppUser;
    pool.query(callback, (err, data) => {
        if(err) res.status(500).send({'error': 'Error occurred while executing query.'});
        res.send(data.rows);
    });
};

export default {
    getAppUser,
};