import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ["driver", "customer"], default: "customer" },
    phone: { type: String, required: true },
    location: { type: String, default: '' },
    availability: { type: Boolean, default: true },
    carId: {type:mongoose.Schema.Types.ObjectId, ref:"car"},
});

const User = mongoose.model('user', userSchema);

export default User;