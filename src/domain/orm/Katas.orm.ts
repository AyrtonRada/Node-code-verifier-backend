import { kataEntity } from "../entities/Kata.Entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IKatas } from "../interfaces/IKatas.interface";

export const getAllKatas = async (page: number, limit: number): Promise<any[] | undefined> => {
  try {
    let kataModel = kataEntity();
    let response: any = {}

    await kataModel.find({isDelete: false})
      .select('name description level valoration date')
      .limit(limit)
      .skip((page - 1) * limit)
      .exec()
      .then((katas: IKatas[])=>{
        response.katas = katas
      })

      await kataModel.countDocuments()
        .then((total: number) => {
          response.totalPages = Math.ceil(total/limit)
          response.currentPage = page
        })

        return response
  
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Katas: ${error}`);
  }
};

export const getKataById = async (id: string): Promise<any | undefined> => {
  try {
      let kataModel = kataEntity()
      
      return await kataModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting Kata By ID: ${error}`);
  }
}
  //Delete
export const deleteKataById = async (id: string): Promise<any | undefined> => {
  try {
      let kataModel = kataEntity()
      return await kataModel.deleteOne({ _id: id })
  } catch (error) {
     LogError(`[ORM ERROR]: Deleting Kata By ID: ${error}`);
  }
}
  //create 
  export const createKata = async (kata:any): Promise<any | undefined> => {
    try {
      
      let kataModel = kataEntity()
      return await kataModel.create(kata)

    } catch (error) {
      LogError(`[ORM ERROR]: Creating Kata: ${error}`)
    }
  }
  //update
  export const updateKataById = async (id: string, kata: any): Promise<any | undefined> => {
    try {
      let kataModel = kataEntity()
      return await kataModel.findByIdAndUpdate(id, kata)
    } catch (error) {
      LogError(`[ORM ERROR]: Updating Kata ${id}: ${error}`)
    }
  }
