import express, { Express, Request,Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`Servidor levantado en http://localhost:${port}` )
})

app.get('/hello', (req: Request,res: Response) => {
    const nombre =  req.query.name
    if(!req.query.name){
        res.json({ "data": { 
        "status": 200,
        "message": "Hola, Anónimo"
        } 
    })
    } else {
        res.json({ "data":{
            "status": 200,
            "message": "Hola, " + nombre
        }})
    }
})

app.get('/', (req: Request, res: Response)=>{
    res.json( {
        "data":{ 
        "status": 200,
        "message": "Goodbye, world"
        }
    })
})