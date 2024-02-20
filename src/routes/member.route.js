import { registerMember } from "../controllers/member.controller.js";
import { Router } from "express";
import { upload } from '../middleware/multer.middleware.js';

const router = Router();



router.route('/register').post(registerMember);

export default router;

