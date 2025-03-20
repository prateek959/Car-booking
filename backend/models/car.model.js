import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    model: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    available: { type: Boolean, default: true },
    price:{type:Number,required:true},
    currentLocation: { type: String, required: true }
});

const Car = mongoose.model('car', carSchema);

export default Car;
