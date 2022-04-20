import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.SECRETKEY || 'MYSECRETKEY'
export const verifyToken = (req: Request, res: Response, next: NextFunction) =>{

    let token: any = req.headers['x-access-token'] //busca por propiedad en el header
    
    //verifica si jwt esta presente
    if(!token){
        return res.status(403).send({
            autheticationError: 'No existe JWT',
            message: 'No estas autorizado a consumir éste endpoint'
        })
    }

    //verifica el token obtenido
    jwt.verify(token, secret, (err: any, decoded: any) => {
        if(err){
            return res.status(500).send({
                authenticationError: 'Error en verificar JWT ',
                message: 'No esta autorizado para consumir este endpoint'
            })
        }

       next()
        

    })



}