import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First Name is Required'],
        trim: true,
    },
    last_name: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Custom'],
        default: 'Male',
    }
})