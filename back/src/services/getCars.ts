import axios from "axios";

export const apiCars = async () => {
     const request = await axios.get('https://server.cocoche.com.ar/car_listing_presentation?list_length=100')
     const cars = request
     console.log(cars)
    try {
        /* cars.map((e: any) => {
            return {
                id: e.cca3,
            }
        }) */
    }

    catch(error) {
        console.log(error)
    };
};