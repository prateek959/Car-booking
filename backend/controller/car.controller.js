import Car from "../models/car.model.js";
import User from "../models/user.model.js";

const createData = async (req, res) => {
    try {
        const { model, registrationNumber, capacity, available, currentLocation, price } = req.body;

        const user = await User.findById(req.user.id);

        const car = await Car.create({
            userId: req.user.id,
            model,
            registrationNumber,
            capacity,
            available,
            currentLocation,
            price
        });

        user.carId = car._id;

        await user.save();

        res.status(201).json({ msg: "Car detail fill successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const getPresonalData = async (req, res) => {
    try {
        const car = await Car.findOne({userId:req.user.id});

        res.status(200).json(car);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const updateData = async (req, res) => {
    try {
        const carid = req.params.carId;

        const user = await User.findById(req.user.id);

        if(user.carId.toString() !== carid){
            return res.status(400).json({msg:"Unauthorized access"});
        }

        const { model, registrationNumber, capacity, available, currentLocation } = req.body;

        const car = await Car.findById(carid);

        if (model) {
            car.model = model;
        }

        if (registrationNumber) {
            car.registrationNumber = registrationNumber;
        }

        if (capacity) {
            car.capacity = capacity;
        }

        if (available) {
            car.available = available;
        }

        if (currentLocation) {
            car.currentLocation = currentLocation;
        }

        await car.save();

        res.status(200).json({ msg: "Data Updated successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const deleteData = async (req, res) => {
    try {
        const carId = req.params.carId;

        const user = await User.findById(req.user.id);

        if (user.carId.toString() !== carId) {
            return res.status(400).json({ msg: "Unauthorized access" });
        }
        user.carId = '';
        await Car.findByIdAndDelete(carId);

        res.status(200).json({ msg: "Delete successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export {getPresonalData, createData, updateData, deleteData};
