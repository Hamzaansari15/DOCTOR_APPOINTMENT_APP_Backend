import { Member } from "../models/member.modal.js";
import asyncHandler from '../utils/asyncHandler.js';

const registerMember = asyncHandler(async (req, res, next) => {
    res.send('User Successful Register!')
})


export {
    registerMember
}