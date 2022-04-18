import express, {Request, Response} from "express"
import { UserController } from "../controller/UsersController"
import { LogInfo } from "../utils/logger"


let userRouter = express.Router()

// localhost:8000/api/users
userRouter.route('/')
    .get(async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: UserController = new UserController()
        const response: any = await controller.getUsers(id)
        return res.send(response)        
    })

    .delete(async(req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: UserController = new UserController()
        const response: any = await controller.deleteUser(id)
        return res.send(response)  
    })

    .post(async (req: Request, res: Response) => {
        
        let name: any = req?.query?.name
        let age: any = req?.query?.age
        let email: any = req?.query?.email
        
        const controller: UserController = new UserController()
        
        let user = {
            name: name,
            email: email,
            age: age
        }
        
        const response:any = await controller.createUser(user)
        return res.send(response) 
    })

    .put(async (req: Request, res: Response) => {
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
        return res.send(response)
    })
export default userRouter