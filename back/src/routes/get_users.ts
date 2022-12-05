import express from 'express'
import { getUsers } from '../services/getUsers'
const route = express.Router()

route.get('/get_users', async (_req, res) => {
    try {
        const users = await getUsers()
        res.status(200).send(users)
    }
    catch(error) {
        console.log(error)
    }
})

export default route