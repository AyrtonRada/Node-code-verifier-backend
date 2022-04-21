import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IKatasController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - Users
import { getAllKatas, getKataById, deleteKataById, createKata, updateKataById } from "../domain/orm/Katas.orm";

@Route("/api/katas")
@Tags("KatasController")
export class KataController implements IKatasController {
    
    @Get("/")
    public async getKatas(@Query()page: number, @Query()limit: number, @Query()id?: string): Promise<any> {
        
        let response: any = ""
        if(id){
            LogSuccess(`[/api/katas] Get Katas By ID: ${id}`);
            response = await getKataById(id)
        }else{
                LogSuccess('[/api/katas] Get All Katas Request')
                response = await getAllKatas(page, limit)
        }
    
        return response
    }

    @Delete("/")
    public async deleteKata(@Query()id?: string): Promise<any> {
        let response: any = ""

        if(id){
            LogSuccess(`[/api/katas] Delete Katas By ID: ${id}`)
            await deleteKataById(id)
            .then(()=>{
                response = {
                    message: `Kata with id ${id} deleted successfully`
                }
            })
        }else{
            LogWarning('[/api/katas] Delete Katas Request WITHOUT ID')
            response = {
                message: 'Please, provide an ID  to remove from database'
            }
        }
        return response
    }

    @Post("/")
    public async createKata(kata: any): Promise<any>{
         
        let response: any = ""

        await createKata(kata)
        .then(()=>{
            LogSuccess(`[/api/katas] Create Katas: ${kata}`)
            response = {
                message: `Kata created successfully: ${kata.name}`
            }
        })
        return response
    }

    @Put("/")
    public async updateKata(@Query()id: string, kata: any): Promise<any> {
        let response: any =""
        if(id){
            LogSuccess(`[/api/katas] Update Kata By ID: ${id}`)
            await updateKataById(id, kata)
            .then(()=>{
                response = {
                    message: `Kata with id ${id} updated successfully`
                }
            })
        }else{
            LogWarning('[/api/katas] Update Kata Request WITHOU ID')
            response = {
                message: 'Please, provide an ID to update an existing kata'
            }
        }
        return response
    }
}