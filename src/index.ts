import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import battleRouter from './routes/battleRouter.js';
import rankingRouter from './routes/rankingRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(battleRouter, rankingRouter);
const PORT: number = 4000

app.listen(PORT, () => console.log("Rodando servidor"))