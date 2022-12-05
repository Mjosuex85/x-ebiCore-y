import { dataBase } from "../db";

export const getUsers = async () => {
    try {
        const users = await dataBase.models.Users.findAll()
        return users
    }
    catch(error) {
        console.log(error)
    }
};