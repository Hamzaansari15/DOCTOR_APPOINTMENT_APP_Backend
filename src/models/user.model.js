import mongoose, { Schema } from "mongoose";



const userSchema = new Schema(
    {
        profileImage: {
            type: String, // Come From Cloudinary
        },
        firstName: {
            type: String,
            required: [true, 'First Name is Required'],
            trim: true,
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [true, 'Email is required'],
            lowerCase: true
        },
        phoneNumber: {
            type: Number,
            unique: true,
            required: true,
            trim: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female'],
        },
        address: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        occupation: {
            type: String
        },
        refreshToken: {
            type: String
        },
        appointments: [{
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }]
    }, { timestamps: true }
)