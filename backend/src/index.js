import 'dotenv/config.js';
import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import appUserRoutes from './models/app_user/routes.js';

const PORT = process.env.port;

const app = express();
app.use(express.json());

app.use('/api/app-user', appUserRoutes);

app.use('*', globalErrorHandler);

process.on('uncaughtException', (err) => {
    const time = new Date().toUTCString();
    console.log(`\n${time} Exception occurred!`);
    console.log(err.stack);
});

app.listen(PORT, () => console.log(`App is running on ${PORT}.`));
