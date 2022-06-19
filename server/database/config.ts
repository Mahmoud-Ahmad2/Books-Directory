import mysql from 'mysql2';
import { config } from 'dotenv';

config();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: process.env.DB_PASSWORD,
});

console.log('Connected to database');

export default connection;
