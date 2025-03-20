import express from 'express';
import { checkToken } from '../middlewear/auth.middlewear.js';
import { carBooking, deleteBooking, getDriverBooking, updateStatus } from '../controller/Booking.controller.js';
import { getUserBooking } from '../controller/user.controller.js';

const bookingRouter = express.Router();

bookingRouter.get('/getDriverBooking',checkToken,getDriverBooking);
bookingRouter.get('/getUserBooking',checkToken,getUserBooking);
bookingRouter.post('/create/:carId',checkToken,carBooking);
bookingRouter.put('/update/:bookingId',checkToken,updateStatus);
bookingRouter.delete('/delete/:bookingId',checkToken,deleteBooking);

export default bookingRouter;
