import { BasicResponse } from "../types"
import { GoodbyeResponse } from "../types"
import { IUser } from "../../domain/interfaces/IUser.interface"

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController{
    getMessage(name?:string): Promise<GoodbyeResponse>
}

export interface IUserController{
    getUsers(page: number, limit: number, id?: string): Promise<any> // Obtener todos los usuarios o por ID
    deleteUser(id?: string): Promise<any>
    updateUser(id: string, user: any): Promise<any>
}

export interface IKatasController{
    getKatas(page: number, limit: number, id?: string): Promise<any> // Obtener todos los usuarios o por ID
    deleteKata(id?: string): Promise<any>
    createKata(kata: any): Promise<any>
    updateKata(id: string, kata: any): Promise<any>
}

export interface IAuthController {
    registerUser(user: IUser): Promise<any>
    loginUser(auth: any): Promise<any>
}