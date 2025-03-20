import express from 'express';
import 'dotenv/config';
import db from './config/db.js';
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import locationRouter from './routes/location.routes.js';
import bookingRouter from './routes/booking.routes.js';
import carRouter from './routes/car.routes.js';

const app = express()

app.use(express.json());
app.use(cors({
    origin: ['http://127.0.0.1:5500', 'https://car-booking-app-123.netlify.app'],
    credentials: true
  }));

app.use('/user',userRouter);
app.use('/location',locationRouter);
app.use('/car',carRouter);
app.use('/booking',bookingRouter);

const PORT = process.env.PORT;

app.listen(PORT,async()=>{
    await db();
    console.log(`Server is running on ${PORT}`);
});