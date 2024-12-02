import { Router } from "express";
import userRouter from "../api/user/user_route"

const router=Router();

router.use('/user',userRouter);


export default router;