import mongoose from 'mongoose'

export const kataEntity = () =>{

    let kataSchema = new mongoose.Schema(
        {
            name: String,
            description: String,
            level: Number,
            date: Date,
            valoration: Number,
            chances: Number
        }
    )

    return mongoose.models.Katas || mongoose.model('Katas', kataSchema)
}