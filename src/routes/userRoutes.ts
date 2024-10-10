import { Router } from "express";
import { createNewUser, getAllUsers, getUserByUserName } from "../controllers/userController";

const userRouter = Router();
//create new user
userRouter.post("/", createNewUser);
//get user by uniq name
userRouter.get("/:username", getUserByUserName);
//gel all users
userRouter.get("/", getAllUsers);

export default userRouter;
