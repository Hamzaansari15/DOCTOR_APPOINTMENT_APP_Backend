import mongoose, { Schema, trusted } from 'mongoose';


const registerSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowerCase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ['doctor', 'user'],
        required: true
    }
})