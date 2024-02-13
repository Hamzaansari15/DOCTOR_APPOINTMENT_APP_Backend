import databaseConnection from './db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js'

dotenv.config({ path: './.env' });


databaseConnection()
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`)))
    .catch(error => console.log('Server Error' + error));
