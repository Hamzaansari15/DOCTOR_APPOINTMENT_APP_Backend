import mongoose, { Schema } from "mongoose";


const doctorSchema = new Schema(
    {
        profileImage: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: true
        },
        phoneNumber: {
            type: Number,
            required: [true, 'Phone Number is Required'],
            unique: true
        },
        emergencyPhoneNumber: {
            type: Number,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: true,
            lowerCase: true
        },
        medical_license_number: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        speciality: {
            type: String,
            required: true,
        },
        medical_school_name: {
            type: String,
            required: true,
        },
        


    }, { timestamps: true })