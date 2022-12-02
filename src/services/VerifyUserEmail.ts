import { dataBase } from '../db'

/** 
 * this function verify if the email is already registred,
 * return boolean
 */

export const verifyRegistredEmail = async (userEmail: string) => {
    let userInfo;

    await dataBase.models.Users.findOne({where: { email: userEmail}})
    .then((res:string) => {
        userInfo = res
    });

    if (userInfo !== null) {
        return true;
    }

    else return false;
};