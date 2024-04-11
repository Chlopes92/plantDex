import { Request, Response } from "express";
import { UserService } from "../services/UserServices";

export class UserController {
    private userService =  new UserService();

    async signup(req: Request, res: Response) {
        console.log("UserController - Sign Up");
        
        const email = req.body.email;
        const password = req.body.password;
        const createUser = await this.userService.signup(email, password);

        if (createUser) {
            res.status(201).json({ message: "User created"});
        }else{
            res.status(500).json({ message: "You Failed !"});
        }
    }

    // vérifier le mail, password et génerer le token
    async login(req: Request, res: Response) {
        console.log("UserController - Login");
        const email = req.body.email;
        const password = req.body.password;

        const token = await this.userService.login(email, password);

        if(token) {
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ message: "Invalid Email or Password!" });
        }
    }
}
