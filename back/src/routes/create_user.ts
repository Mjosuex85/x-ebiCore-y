import express from 'express'
const router = express.Router()
import { verifyRegistredEmail } from '../services/VerifyUserEmail'
import { dataBase } from '../db';

router.post("/create_user", async (req, res) => {
    const { name, phone, email } = req.body

    try {
        let isRegistered;
        await verifyRegistredEmail(email)
        .then((res) => isRegistered = res)

        isRegistered ? 
        res.status(500).send("The User is already registered")
        
        : await dataBase.models.Users.create({
            name,
            phone,
            email
        })
        .then((source: any) => {
            const user = {
                id: source.id,
                createdAt: source.createdAt // TODO traer fecha formato: dd-mm-AAAA
            };
            res.status(200).send(user)
        })
    }
    
    catch(error) {
        console.log(error)
    };
   
});

export default router;