import Booking from "../models/Booking.model.js";
import Car from "../models/car.model.js";

const carBooking = async (req, res) => {
    try {
        const carId = req.params.carId;

        const { pickupLocation, dropoffLocation, status } = req.body;

        const car = await Car.findById(carId);

        const book = await Booking.create({
            customerId: req.user.id,
            driverId: car.userId,
            carId: carId,
            pickupLocation: pickupLocation,
            dropoffLocation: dropoffLocation,
            status
        });

        res.status(201).json({ msg: "Car booking successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const getDriverBooking = async (req, res) => {
    try {
        const car = await Car.findOne({ userId: req.user.id });
        const booking = await Booking.findOne({ driverId: car.userId });

        res.status(200).json(booking);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const updateStatus = async (req, res) => {
    try {
        const { status, pickupLocation, dropoffLocation } = req.body;
        const bookingId = req.params.bookingId;
        const booking = await Booking.findById(bookingId);
        
        if(status){
            booking.status = status;
        }

        if(pickupLocation){
            booking.pickupLocation = pickupLocation;
        }

        if(dropoffLocation){
            booking.dropoffLocation = dropoffLocation;
        }

        await booking.save();

        res.status(200).json({msg:"Update status successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const deleteBooking = async(req, res)=>{
    try {
       const bookingId = req.params.bookingId;
        await Booking.findByIdAndDelete(bookingId);
        res.status(200).json({msg:"Delete successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
}

export { carBooking, getDriverBooking, updateStatus, deleteBooking };
