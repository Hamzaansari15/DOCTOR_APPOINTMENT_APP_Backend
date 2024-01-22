import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

export const User = mongoose.model('User', userSchema);