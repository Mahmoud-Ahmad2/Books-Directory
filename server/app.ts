import dotenv from 'dotenv';
import express, { Application } from 'express';
import compression from 'compression';

dotenv.config();


const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());

export default app;