
import {Router} from "express";
import { create, login } from "./user_controller";

const route=Router();


route.post('/signin',create);
route.post('/login',login);

export default route;