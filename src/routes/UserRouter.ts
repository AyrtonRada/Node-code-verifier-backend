import express, {Request, Response} from "express"
import { UserController } from "../controller/UsersController"
import { LogInfo } from "../utils/logger"
import { verifyToken } from '../middlewares/verifyToken.middleware'
import { KataController } from "../controller/KatasController"
import bodyParser from "body-parser"
import { KataLevel } from "../domain/interfaces/IKatas.interface"
import { IUser } from "../domain/interfaces/IUser.interface"
let jsonParser = bodyParser.json()
let userRouter = express.Router()

// localhost:8000/api/users
userRouter.route('/')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        let page: any = req?.query?.page || 1
        let limit: any = req?.query?.limit || 10

        LogInfo(`Query Param: ${id}`)
        const controller: UserController = new UserController()
        const response: any = await controller.getUsers(page, limit, id)
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

userRouter.route('/katas')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        let page: any = req?.query?.page || 1
        let limit: any = req?.query?.limit || 10
        const controller: UserController = new UserController()
        const response: any = await controller.getKatas(page, limit, id)
        return res.status(200).send(response)        
    })
    .post(jsonParser, verifyToken, async (req: Request, res: Response) => {
        
        const id: string = res.locals.loggedUser?._id
     
        let name: string = req?.body?.name
        let description: string = req?.body?.description || ''
        let level: KataLevel = req?.body?.level
        let intents: number = req?.body?.intents || 0
        let stars: number = req?.body?.starts || 0
        let creator: string = id
        let solution: string = req?.body?.solution || ''
        let participants: string[] = req?.body?.participants || []
        
        if( name && description && level && intents >= 0 && stars >= 0 && creator && solution && participants.length >= 0){

            const controller: KataController = new KataController()
            let kata = {
                name: name,
                description: description,
                level: level,
                intents: intents,
                stars: stars,
                creator: creator,
                solution: solution,
                participants: participants
            }
            const response: any = await controller.createKata(kata)
            return res.status(200).send(response)

        }else{
            return res.status(400).send({
                message: '[ERROR] Creating Kata. You need to sen all attrs of Kata to creating it'
            })
        }
    })
export default userRouter

/**
 * 
 * GET documentos => 200 OK
 * CREATE documentos => 201 OK
 * DELETE documentos => 200 (Entity)/ 204 (No Return)
 * UPDATE documentos => 200 (Entity)/ 204 (No Return)
 */