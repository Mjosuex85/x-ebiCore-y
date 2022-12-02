import express from 'express'
import get_ford_cars from './get_ford_cars'
import create_user from './create_user'

const router = express.Router()

router.use("/", get_ford_cars)
router.use("/", create_user) 

export default router