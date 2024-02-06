import mongoose, { Schema } from "mongoose";


const workHistory = new Schema({
    workPlaceName: {
        type: String,
        required: true,
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: String,
        required: true
    }
})

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
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
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
        medicalLicenseNumber: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        speciality: {
            type: String,
            required: true,
        },
        medicalSchoolName: {
            type: String,
            required: true,
        },
        graduationYear: {
            type: Date,
            required: true
        },
        workHistory: {
            type: [workHistory]
        },
        document: {
            type: [String],
        },
        status: {
            type: String,
            enum: ['approved', 'pending', 'block'],
        },
        refreshToken: {
            type: String,
        },
        appointmentFee: {
            type: Number,
            required: true
        }


    }, { timestamps: true })


export const Doctor = mongoose.model('Doctor', doctorSchema);