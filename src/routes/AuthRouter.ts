import express, { Request, Response } from "express";
import { AuthController  } from "../controller/AuthController";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";
import bcrypt from 'bcrypt';

let authRouter = express.Router();

authRouter.route('/register')
    .post (async (req:Request, res: Response) => {

        let { name, email, password, age } = req.body;
        let hashedPassword = '';

        if( name && password && email && age){
           
            hashedPassword = bcrypt.hashSync(password, 8); // Obtiene y encrypta la contraseña

            let newUser: IUser = {
                name : name,
                email: email,
                password: hashedPassword,
                age: age
            }

            const controller: AuthController = new AuthController();
            const response: any = await controller.registerUser(newUser);

            return res.status(200).send(response);

        }

})



authRouter.route('/login')
    .post (async (req:Request, res: Response) => {

        let { email, password } = req.body;

        if( email && password){

            const controller: AuthController = new AuthController();

            let auth: IAuth = {
                email: email,
                password: password
            }
            const response: any = await controller.loginUser(auth);

            return res.status(200).send(response);

        }

});

export default authRouter;
