import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userController = new UserController();
const userRouter = Router();

// se connecter 
userRouter.post( "/signup", (req, res) => {
    console.log('UserRouter - Sign up');
    userController.signup(req, res);
});

// connexion
userRouter.post( "/login", ( req, res )=>{
    console.log("userRouter - LOGIN");
    userController.login( req, res );
});

export default userRouter;