import express from 'express'
import get_ford_cars from './get_ford_cars'
import create_user from './create_user'
import get_users from './get_users'

const router = express.Router()

router.use("/", get_ford_cars)
router.use("/", create_user) 
router.use('/', get_users)

export default router