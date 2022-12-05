import express from 'express'
/* import axios from 'axios'; */
const router = express.Router()
/* import { apiCars } from '../services/getCars' */


router.get("/get_ford_cars", async (_req, res) => {
   /*  axios.get("https://server.cocoche.com.ar/car_listing_presentation?list_length=100")
    .then((respose) => {
        console.log(respose, "........")
    }) */

    res.send("FUNCIONA ESTE GET DE CARS")
});


export default router;