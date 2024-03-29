import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger'

dotenv.config()
const port = process.env.PORT || 8000

server.listen(port, ()=>{
  LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api `)
})

// En caso de que ocurra un error

server.on('error', (error)=>{
  LogError(`[SERVER ERROR]: ${error}`)
})

