import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: process.env.DATA_LIMIT }));
app.use(express.static('public/image'));
app.use(urlencoded({ extended: true, limit: process.env.DATA_LIMIT }));


//  ROUTES IMPORT

import userRouter from './routes/member.route.js';

//  ROUTES  DECLARATION
app.use('/api/v1/member', userRouter);


export { app }