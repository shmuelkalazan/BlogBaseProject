import { Router } from "express";
import { createNewUser, getAllUsers, getUserByUserName } from "../controllers/userController";

const userRouter = Router();
//create new user
userRouter.post("/", createNewUser);
//gel all users
userRouter.get("/", getAllUsers);
//get user by uniq name
userRouter.get("/:username", getUserByUserName);

export default userRouter;
