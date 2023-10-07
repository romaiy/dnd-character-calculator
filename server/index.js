import express from 'express';
import raceRouter from './routes/race.routes.js'

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', raceRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));