import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import { createUser } from "../services/userService";

export const createNewUser = async (req: Request, res: Response) => {
    try {
        console.log("in controller")
        const result:any = await createUser(req.body)
        if (result ==  typeof User){
            console.log("gooood")
            res.status(201).json(result)
        }
        else{
            res.status(401).json(result)
        }
    } catch (err) {
        res.status(400).json(err)
    }
};

export const getAllUsers = async (req: Request, res: Response) => {};

export const getUserByUserName = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
