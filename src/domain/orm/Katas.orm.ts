import { kataEntity } from "../entities/Kata.Entity";
import { LogSuccess, LogError } from "../../utils/logger";

export const getAllKatas = async (): Promise<any[] | undefined> => {
  try {
    let kataModel = kataEntity();
    return await kataModel.find({ isDelete: false });
  
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
