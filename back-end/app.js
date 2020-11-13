import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;

app.get('/', () => console.log('wooorks'));

app.listen(PORT, () => console.log('its working!'));
