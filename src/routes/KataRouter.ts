import express, {Request, Response} from "express"
import { KataController } from "../controller/KatasController"
import { LogInfo } from "../utils/logger"
import { verifyToken } from "../middlewares/verifyToken.middleware"
import bodyParser from 'body-parser'
import { KataLevel } from "../domain/interfaces/IKatas.interface"

let jsonParser = bodyParser.json()
let kataRouter = express.Router()

// localhost:8000/api/katas
kataRouter.route('/')
    .get(verifyToken, async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        let page: any = req?.query?.page || 1
        let limit: any = req?.query?.limit || 10
        
        LogInfo(`Query Param: ${id}`)
        const controller: KataController = new KataController()
        const response: any = await controller.getKatas(page, limit, id)
        return res.send(response)        
    })

    .delete(verifyToken, async(req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: KataController = new KataController()
        const response: any = await controller.deleteKata(id)
        return res.status(200).send(response)  
    })

    .post(jsonParser, verifyToken, async (req: Request, res: Response) => {
        
        let name: string = req?.body?.name
        let description: string = req?.body?.description || ''
        let level: KataLevel = req?.body?.level
        let intents: number = req?.body?.intents || 0
        let stars: number = req?.body?.starts || 0
        let creator: string = req?.body?.creator 
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
                message: '[ERROR] Updating Kata. You need to sen all attrs of Kata to update it'
            })
        }
    })

    .put( jsonParser, verifyToken, async (req: Request, res: Response) => {
        let id: any = req?.query?.id        
        let name: string = req?.body?.name
        let description: string = req?.body?.description || ''
        let level: KataLevel = req?.body?.level
        let intents: number = req?.body?.intents || 0
        let stars: number = req?.body?.starts || 0
        let creator: string = req?.body?.creator 
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
            const response: any = await controller.updateKata(id, kata)
            return res.status(200).send(response)

        }else{
            return res.status(400).send({
                message: '[ERROR] Updating Kata. You need to sen all attrs of Kata to update it'
            })
        }
    })

export default kataRouter