import { Member } from "../models/member.modal.js";
import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const generateRefreshTokenAndAccessToken = async (userId) => {
    try {
        const member = await Member.findById(userId);
        const refreshToken = await member.generateRefreshToken();
        const accessToken = await member.generateAccessToken();
        member.refreshToken = refreshToken;
        await member.save({ validateBeforeSave: false })
        return { refreshToken, accessToken };
    } catch (error) {
        console.log(error);
    }
}

const registerMember = asyncHandler(async (req, res, next) => {

    try {
        // Check Request Data
        const { fullName, email, phoneNumber, password, accountType } = req.body;
        if ([fullName, email, phoneNumber, password, accountType].some(item => item?.trim() === '')) {
            return res.status(400).json(new ApiResponse('400', '', 'All Fields are Required'));
        }

        // Check User Already Exists
        const memberExists = await Member.findOne({ $or: [{ email }, { phoneNumber }] });
        if (memberExists) return res.status(400).json(new ApiResponse(400, '', 'User Already Exists'));

        // Save User in Database
        const member = await Member.create(req.body);
        if (!member) return res.status(500).json(new ApiResponse(500, '', 'Something went wrong while user register'))
        const { refreshToken, accessToken } = await generateRefreshTokenAndAccessToken(member._id);
        const savedMember = await Member.findById(member?._id).select('-password, -refreshToken');
        res.status(201).json(new ApiResponse(201, { savedMember, refreshToken, accessToken }, 'User Successful Created'));

    } catch (error) {
        console.log(error);
        res.status(500).json(new ApiResponse(500, '', 'Server Error'));
    }


})


export {
    registerMember
}