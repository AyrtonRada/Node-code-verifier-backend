import express, {Request, Response} from "express"
import { KataController } from "../controller/KatasController"
import { LogInfo } from "../utils/logger"


let kataRouter = express.Router()

// localhost:8000/api/katas
kataRouter.route('/')
    .get(async (req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: KataController = new KataController()
        const response: any = await controller.getKatas(id)
        return res.send(response)        
    })

    .delete(async(req: Request, res: Response)=>{
        let id: any = req?.query?.id
        LogInfo(`Query Param: ${id}`)
        const controller: KataController = new KataController()
        const response: any = await controller.deleteKata(id)
        return res.send(response)  
    })

    .post(async (req: Request, res: Response) => {
        
        let name: any = req?.query?.name
        let description: any = req?.query?.description
        let level: any = req?.query?.level
        let date: any = new Date()
        let valoration: any = req?.query?.valoration
        let chances: any = req?.query?.chances
        
        const controller: KataController = new KataController()
        
        let kata = {
            name: name,
            description: description,
            level: level,
            date: date,
            valoration: valoration,
            chances: chances
        }
        
        const response:any = await controller.createKata(kata)
        return res.send(response) 
    })

    .put(async (req: Request, res: Response) => {
        let id: any = req?.query?.id        
        let name: any = req?.query?.name
        let description: any = req?.query?.description
        let level: any = req?.query?.level
        let date: any = new Date()
        let valoration: any = req?.query?.valoration
        let chances: any = req?.query?.chances
        LogInfo(`Query Param: ${id}, ${name}, ${description}, ${level}, ${date}, ${valoration}, ${chances}`)
        
        const controller: KataController = new KataController()
        let kata = {
            name: name,
            description: description,
            level: level,
            date: date,
            valoration: valoration,
            chances: chances
        }
        const response: any = await controller.updateKata(id, kata)
        return res.send(response)
    })
export default kataRouter