import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRETKEY || "MYSECRETKEY";

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
    let userModel = userEntity();

    return await userModel.findById(id);
  } catch (error) {
    LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
  }
};
//Delete
export const deleteUserById = async (id: string): Promise<any | undefined> => {
  try {
    let userModel = userEntity();
    return await userModel.deleteOne({ _id: id });
  } catch (error) {
    LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
  }
};
//update
export const updateUserById = async (
  id: string,
  user: any
): Promise<any | undefined> => {
  try {
    let userModel = userEntity();
    return await userModel.findByIdAndUpdate(id, user);
  } catch (error) {
    LogError(`[ORM ERROR]: Updating User ${id}: ${error}`);
  }
};

export const registerUser = async (user: IUser): Promise<any | undefined> => {
  try {
    let userModel = userEntity();
    return await userModel.create(user); // Create/Insert new User
  } catch (error) {
    LogError(`[ORM ERROR]: Creating User: ${error}`);
  }
};

export const loginUser = async (auth: IAuth): Promise<any | undefined> => {
  try {
    let userModel = userEntity();

    let userFound: IUser | undefined = undefined;
    let token = undefined;

    await userModel
      .findOne({ email: auth.email })
      .then((user: IUser) => {
        userFound = user;
      })

      .catch((error) => {
        console.error(`[ERROR Authentication in ORM]: User Not Found`);
        throw new Error(
          `[ERROR Authentication in ORM]: User Not Found: ${error}`
        );
      });

    let validPassword = bcrypt.compareSync(auth.password, userFound!.password);

    if (!validPassword) {
      console.error(`[ERROR Authentication in ORM]: Password Not Valid`);
      throw new Error(`[ERROR Authentication in ORM]: Password Not Valid`);
    }

    // Generate our JWT
    token = jwt.sign({ email: userFound!.email }, secret, {
      expiresIn: "2h",
    });

    return {
      user: userFound,
      token: token,
    };
  } catch (error) {
    LogError(`[ORM ERROR]: Creating User: ${error}`);
  }
};

export const logoutUser = async (): Promise<any | undefined> => {};
