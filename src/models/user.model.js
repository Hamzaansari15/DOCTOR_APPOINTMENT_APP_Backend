import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [true, 'Email is required'],
            lowerCase: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female'],
        },
        address: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        occupation: {
            type: String,
        },
        refreshToken: {
            type: String,
        },
        appointments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Appointment',
            },
        ],
        accountType: {
            type: String,
            default: 'user'
        },
        status: {
            type: String,
            enum: ['incomplete', 'pending', 'complete'],
            default: 'complete'
        }
    },
    { timestamps: true }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    return (this.password = await bcrypt.hash(this.password, 10));
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// userSchema.methods.generateRefreshToken = function () {
//     return jwt.sign(
//         { _id: this._id },
//         process.env.REFRESH_TOKEN_SECRET,
//         { expiresIn: process.env.REFRESH_TOKENEXPIRY }
//     );
// };

// userSchema.methods.generateAccessToken = function () {
//     return jwt.sign(
//         {
//             _id: this._id,
//             fullName: `${this.firstName} ${this.lastName}`,
//             phoneNumber: this.phoneNumber,
//             email: this.email,
//             accountType: this.accountType,
//             status: this.status
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
//     );
// };
