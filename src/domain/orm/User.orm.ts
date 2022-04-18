import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";

export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    return await userModel.find({ isDelete: false });
  
  } catch (error) {
    LogError(`[ORM ERROR]: Getting All Users: ${error}`);
  }
};

export const getUserById = async (id: string): Promise<any | undefined> => {
  try {
      let userModel = userEntity()
      
      return await userModel.findById(id)
  } catch (error) {
    LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
  }
}
  //Delete
export const deleteUserById = async (id: string): Promise<any | undefined> => {
  try {
      let userModel = userEntity()
      return await userModel.deleteOne({ _id: id })
  } catch (error) {
     LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
  }
}
  //create 
  export const createUser = async (user:any): Promise<any | undefined> => {
    try {
      
      let userModel = userEntity()
      return await userModel.create(user)

    } catch (error) {
      LogError(`[ORM ERROR]: Creating User: ${error}`)
    }
  }
  //update
  export const updateUserById = async (id: string, user: any): Promise<any | undefined> => {
    try {
      let userModel = userEntity()
      return await userModel.findByIdAndUpdate(id, user)
    } catch (error) {
      LogError(`[ORM ERROR]: Updating User ${id}: ${error}`)
    }
  }

