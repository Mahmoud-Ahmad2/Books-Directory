import dotenv from 'dotenv';
import express, { Application, Router } from 'express';
import compression from 'compression';
import db from './database/config';
import router from './router';
import cookieParser from 'cookie-parser';

dotenv.config();

db.connect();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());
app.use(cookieParser());

app.use(router);
export default app;