'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import compression from 'compression';

import UserRouter from './routes/UserRouter';
import LimeRouter from './routes/LimeRouter';
import DummyDataRouter from './routes/DummyDataRouter';

const app = express();
const { PORT, MYSQL_PASSWORD } = process.env;
const port = PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

//! mySQL Connection
export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQL_PASSWORD,
  database: 'liamdb',
});

db.connect((err) => {
  if (err) throw new Error(err.message);
  console.log('connected to Database successfully!!');
});

app.get('/', (req, res) => {
  res.send('Welcome to Liam-backend');
});

app.use('/user', UserRouter);

app.use('/liam', LimeRouter);

app.use('/dummy', DummyDataRouter);

app.listen(port, (err) => {
  if (err) throw new Error(error.message);
  console.log(`🚀 Express-Server ready at http://localhost:${port}`);
  console.log('Start Coding with Happiness  :)');
});
