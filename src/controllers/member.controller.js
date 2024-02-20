import { Member } from "../models/member.modal.js";
import asyncHandler from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerMember = asyncHandler(async (req, res, next) => {

    // Check Request Data
    console.log(req.body);
    const { fullName, email, phoneNumber, password, accountType } = req.body;
    if ([fullName, email, phoneNumber, password, accountType].some(item => item?.trim() === '')) {
        console.log('error');
        res.status(400).json(new ApiResponse('400', '', 'All Data Required'));
    }
    else console.log('Else');


    // res.send('User Successful Register!')
})


export {
    registerMember
}