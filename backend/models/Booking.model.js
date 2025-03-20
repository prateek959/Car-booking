import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: 'car', required: true },
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed'], default: 'pending' },
    bookingTime: { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
