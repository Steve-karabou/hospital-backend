import {Router} from "express";
import UserController from "../controllers/user";
const router = Router();

//User
router.post("/", UserController.createUser);
router.get("/", UserController.allUser);


export default router;