import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import router from '../routes'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'

dotenv.config()
const server: Express = express()

//* Swagger configuracion y ruta
server.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, {
    swaggerOptions: {
        url:  "/swagger.json",
        explorer: true
    }
}))


server.use('/api', router)
//Servidor estatico
server.use(express.static('public'))
//conexion con Mongoose
mongoose.connect('mongodb://localhost:27017/codeverification')
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