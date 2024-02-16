import { registerMember } from "../controllers/member.controller.js";
import { Router } from "express";

const router = Router();



router.route('/register').post(registerMember);

export default router;

