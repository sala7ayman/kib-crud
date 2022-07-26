import { UpdateQuery, FilterQuery, QueryOptions } from "mongoose";
import UserModel, { UserDocument, UserInput } from "../model/user.model";


export async function createUser(req:UserInput) {
    try {
        return await UserModel.create(req)

    } catch (e: any) {
        throw new Error(e);

    }

}


export async function getUser(
    query: FilterQuery<UserDocument>,
    options: QueryOptions = { lean: true }
) {
    try {
        const result = await UserModel.findOne(query, {}, options);
        return result;
    } catch (e) {
        throw e;
    }
}


export async function findAndUpdateUser(
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    options: QueryOptions
  ) {
    return UserModel.findOneAndUpdate(query, update, options);
  }
  

export async function deleteUser(query: FilterQuery<UserDocument>) {
    try {
        return UserModel.deleteOne(query);
    } catch (e) {
        throw e;
    }
}
