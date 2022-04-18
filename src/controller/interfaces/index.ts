import { BasicResponse } from "../types"
import { GoodbyeResponse } from "../types"

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController{
    getMessage(name?:string): Promise<GoodbyeResponse>
}

export interface IUserController{
    getUsers(id?: string): Promise<any> // Obtener todos los usuarios o por ID
    deleteUser(id?: string): Promise<any>
    createUser(user: any): Promise<any>
    updateUser(id: string, user: any): Promise<any>
}