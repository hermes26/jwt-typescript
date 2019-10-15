import { Request, Response} from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
    //saving new user
    const user: IUser =  new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    const savedUser = await user.save()
    
    //token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest')
    res.json(token);

}

export const signin = (req: Request, res: Response) => {
    res.send('Signin');

}

export const profile = (req: Request, res: Response) => {
    res.send('Profile');

}