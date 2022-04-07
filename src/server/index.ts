import express, { Express, Request, Response, Router} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import routes from '../routes'

dotenv.config()

const server: Express = express()


server.use('/api', routes)

//conexion con Mongoose

//configuracion de seguridad
server.use(helmet())
server.use(cors())

//tipo de contenido debe mostrar
server.use(express.urlencoded({ extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))

server.get('/', (req: Request, res: Response)=>{
    res.redirect('/api')
})
export default server