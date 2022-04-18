import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - Users
import { getAllUsers, getUserById, deleteUserById, createUser, updateUserById } from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
    
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {
        
        let response: any = ""
        if(id){
            LogSuccess(`[/api/users] Get User By ID: ${id}`);
            response = await getUserById(id)
        }else{
                LogSuccess('[/api/users] Get All Users Request')
                response = await getAllUsers()
        }
    
        return response
    }

    @Delete("/")
    public async deleteUser(@Query()id?: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/users] Delete User By ID: ${id}`)
            await deleteUserById(id)
            .then(()=>{
                response = {
                    message: `User with id ${id} deleted successfully`
                }
            })
        }else{
            LogWarning('[/api/users] Delete User Request WITHOUT ID')
            response = {
                message: 'Please, provide an ID  to remove from database'
            }
        }
        return response
    }

    @Post("/")
    public async createUser(user: any): Promise<any>{
         
        let response: any = ""

        await createUser(user)
        .then(()=>{
            LogSuccess(`[/api/users] Create User: ${user}`)
            response = {
                message: `User created successfully: ${user.name}`
            }
        })
        return response
    }

    @Put("/")
    public async updateUser(@Query()id: string, user: any): Promise<any> {
        let response: any =""
        if(id){
            LogSuccess(`[/api/users] Update User By ID: ${id}`)
            await updateUserById(id, user)
            .then(()=>{
                response = {
                    message: `User with id ${id} updated successfully`
                }
            })
        }else{
            LogWarning('[/api/users] Update User Request WITHOU ID')
            response = {
                message: 'Please, provide an ID to update an existing user'
            }
        }
        return response
    }
}