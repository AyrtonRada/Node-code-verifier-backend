import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - Users
import { getAllUsers, getUserById, deleteUserById, updateUserById, getKatasFromUser } from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
    
    @Get("/")
    public async getUsers(@Query() page: number, @Query() limit: number, @Query() id?: string): Promise<any> {
        
        let response: any = ""
        if(id){
            LogSuccess(`[/api/users] Get User By ID: ${id}`);
            response = await getUserById(id)

        }else{
                LogSuccess('[/api/users] Get All Users Request')
                response = await getAllUsers(page, limit)
        }
    
        return response
    }

    @Delete("/")
    public async deleteUser(@Query() id?: string): Promise<any> {
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

    @Put("/")
    public async updateUser(@Query() id: string, user: any): Promise<any> {
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

    @Get('/katas')
    public async getKatas(@Query() page: number, @Query() limit: number, @Query() id: string):Promise<any> {
        let response: any = ''

        if(id){
            LogSuccess(`[/api/users/katas] Get Katas from User ByID: ${id}`)
            response = await getKatasFromUser(page, limit, id)
        }else{
            LogSuccess(`[/api/users/katas] Get All Katas without id`)
            response = {
                message: 'ID from user is needed'
            }
        }
        return response
    }
}