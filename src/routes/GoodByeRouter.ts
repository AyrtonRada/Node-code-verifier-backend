import express, { Request, Response} from 'express'
import { GoodByeController } from '../controller/GoodByeController'
import { LogInfo } from '../utils/logger'

let goodbyeRouter = express.Router()

goodbyeRouter.route('/')
        .get(async (req: Request, res: Response)=>{
            let name: any = req?.query?.name
            LogInfo(`Query Param: ${name}`)

            const controller: GoodByeController = new GoodByeController()
            const response = await controller.getMessage(name)
            return res.send(response)

        })

export default goodbyeRouter