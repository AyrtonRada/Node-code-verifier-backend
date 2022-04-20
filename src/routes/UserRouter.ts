import express, {Request, Response} from "express"
import { UserController } from "../controller/UsersController"
import { LogInfo } from "../utils/logger"
import { verifyToken } from '../middlewares/verifyToken.middleware'

let userRouter = express.Router()

// localhost:8000/api/users
userRouter.route('/')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: UserController = new UserController()
        const response: any = await controller.getUsers(id)
        return res.status(200).send(response)        
    })

    .delete(verifyToken, async(req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: UserController = new UserController()
        const response: any = await controller.deleteUser(id)
        return res.status(204).send(response)  
    })

    .put(verifyToken, async (req: Request, res: Response) => {
        let id: any = req?.query?.id        
        let name: any = req?.query?.name
        let age: any = req?.query?.age
        let email: any = req?.query?.email
        LogInfo(`Query Param: ${id}, ${name}, ${age}, ${email}`)
        
        const controller: UserController = new UserController()
        let user = {
            name: name,
            email: email,
            age: age
        
            
        }
        const response: any = await controller.updateUser(id, user)
        return res.status(204).send(response)
    })
export default userRouter

/**
 * 
 * GET documentos => 200 OK
 * CREATE documentos => 201 OK
 * DELETE documentos => 200 (Entity)/ 204 (No Return)
 * UPDATE documentos => 200 (Entity)/ 204 (No Return)
 */