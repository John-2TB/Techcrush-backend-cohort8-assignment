import 'dotenv/config'
import express, { request } from 'express';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/errorHandler.js';
import studentRoutes from './routes/studentRoutes.js'

const app = express();

const port = 3000;

app.use(express.json());

app.use('/', studentRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to Student portal API");
});

app.use(errorHandler)

const startServer = async () => {
  try {
    await connectDB()

    app.listen(port, ()=> {
      console.log(`Server is running on: http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server')
  }
};

startServer();