import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getRouter from './route/getRoute';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/get', getRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json('Unauthenticated request!');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
