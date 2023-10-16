import express from 'express';
import raceRouter from './routes/race.routes.js'
import classesRouter from './routes/classes.routes.js'
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  origin: ['http://localhost:5173/', 'http://localhost:5173'],
  optionsSuccessStatus: 200,
  credentials: true,
}));
app.use(express.json());
app.use('/api', raceRouter, classesRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));