const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.port;

app.use(express.json());

// Routes
const userRoutes = require('./app_user/routes');

app.use('/api/user', userRoutes);

app.listen(port, () => console.log(`Server is running on ${port}.`));
