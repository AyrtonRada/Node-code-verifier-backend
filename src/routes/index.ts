import express, { Request, Response} from 'express'
import helloRouter from './HelloRouter'
import { LogInfo } from '../utils/logger'
import goodbyeRouter from './GoodByeRouter'
import userRouter from './UserRouter'
import kataRouter from './KataRouter'
let server = express()
let rootRouter = express.Router()

rootRouter.get('/', (req: Request,res: Response)=>{
    LogInfo('GET: http://localhost:8000/api/')
    res.send('Welcome')
})

server.use('/', rootRouter)
server.use('/hello', helloRouter)
server.use('/goodbye', goodbyeRouter)
server.use('/users', userRouter)
server.use('/katas', kataRouter)

export default server

