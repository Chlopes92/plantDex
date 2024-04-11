import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/User";
import jwt from 'jsonwebtoken';

export class UserService {
    // private signifie que c'est que pour cette classe
    private userRepository = AppDataSource.getRepository(User);

    async signup(email: string, password: string) {
        console.log("UserService - Sign up");

        // hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = this.userRepository.create({
            email : email, 
            password : hashedPassword
        }); 

        return await this.userRepository.save(newUser);
    }

    async login(email:string, password:string){
        console.log('UserService - Login');

        const user = await this.userRepository.findOneBy({ email: email });

        if (!user) {
            return null;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return null;
        }
        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: "2h" }

        );
        return token;
    }
}