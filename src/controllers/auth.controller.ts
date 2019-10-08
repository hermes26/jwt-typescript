import { Request, Response} from "express";
import User, { IUser } from "../models/User"

export const signup = async (req: Request, res: Response) => {
    console.log(req.body);
    const user: IUser =  new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    const savedUser = await user.save()
    console.log(savedUser);
    res.send('Signup');

}

export const signin = (req: Request, res: Response) => {
    res.send('Signin');

}

export const profile = (req: Request, res: Response) => {
    res.send('Profile');

}