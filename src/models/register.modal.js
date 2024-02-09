import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const memberSchema = new Schema({
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
    phoneNumber: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ['doctor', 'user'],
        required: true
    },
    status: {
        type: String,
        enum: ['incomplete', 'pending', 'complete'],
        default: 'incomplete'
    }
}, { timestamps: true })


memberSchema.pre('save', async function () {
    if (!(this.isModified('password'))) return;
    this.password = await bcrypt.hash(this.password, 10);
    return;
})

memberSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


memberSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKENEXPIRY }
    );
};

memberSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            fullName: `${this.firstName} ${this.lastName}`,
            phoneNumber: this.phoneNumber,
            email: this.email,
            accountType: this.accountType,
            status: this.status
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};


export const Member = mongoose.model('Member', memberSchema);