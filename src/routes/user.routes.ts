import { Router } from "express";
import { getListFormattedUser } from "../controllers/user.controller";

const router = Router();
router.get('/get-formatted-user', getListFormattedUser);

export default router;