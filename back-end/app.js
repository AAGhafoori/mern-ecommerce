import express from 'express';
import dotenv from 'dotenv';
import connectMD from './config/db.js';
import colors from 'colors';
import productsRoute from './routes/products.js';
import { errorHandler, notFound } from './controllers/error.js';
import cors from 'cors';

const app = express();

dotenv.config();
connectMD();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use('/api/products', productsRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} mode and in PORT ${PORT}`
      .yellow.bold
  )
);
