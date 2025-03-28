import User from "../models/user.model.js";
import argon2, { hash } from 'argon2';
import jwt from 'jsonwebtoken';
import Car from "../models/car.model.js";
import Booking from "../models/Booking.model.js";
const register = async (req, res) => {
    try {
        const { name, email, password, role, phone, location, availability } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: "User is already register" });
        }

        const hashPass = await argon2.hash(password);

        user = await User.create({
            name,
            email,
            password: hashPass,
            role,
            phone,
            location,
            availability
        });

        res.status(201).json({msg:"User register successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};


const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({msg:"Email is Invalid"});
        }

        const verify = await argon2.verify(user.password,password);

        if(!verify){
             return res.status(400).json({msg:"Password is invalid"});
        }

        const token = jwt.sign({id:user._id,email},process.env.JWT_SECRET_KEY,{expiresIn:'7d'});
 
        res.status(200).json({msg:"Login successfully",token, role:user.role});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });  
    }
};

const updateDetail = async(req, res)=>{
    const {name, phone, location} = req.body;

    const user = await User.findById(req.user.id);

    if(name){
        user.name = name;
    }

    if(phone){
        user.phone = phone;
    }

    if(location){
        user.location = location;
    }

    await user.save();

    res.status(200).json({msg:"Update Successfully"});
    
}

const getData = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        // const pattern = user.location;
        const pattern = req.query.pattern || user.location;

        const data = await Car.find({
            currentLocation: { $regex: pattern, $options: 'i' },
            available: true
        });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const getUserBooking = async (req, res)=>{
    try {
        const booking = await Booking.findOne({customerId:req.user.id}).populate('driverId');
// console.log(booking);
        res.status(200).json(booking);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });    
    }
};

const getUserDetails = async(req, res)=>{
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal server error" });   
    }
}

export {register, login, getData, updateDetail, getUserBooking, getUserDetails};