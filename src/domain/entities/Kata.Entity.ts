import mongoose from 'mongoose'
import { IKatas } from '../interfaces/IKatas.interface'

export const kataEntity = () =>{

    let kataSchema = new mongoose.Schema<IKatas>(
        {
            name: { type: String, required: true},
            description: { type: String, required: true},
            level: { type: String, required: true},
            intents: { type: Number, required: true},
            stars: { type: Number, required: true},
            creator: { type: String},
            solution: { type: String, required: true},
            participants: { type: [], required: true}
        })

    return mongoose.models.Katas || mongoose.model<IKatas>('Katas', kataSchema)
}