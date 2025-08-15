import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getRouter from './route/getRoute.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/get', getRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json('Unauthenticated request!');
});
