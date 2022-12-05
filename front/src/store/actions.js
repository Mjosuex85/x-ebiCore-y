import axios from 'axios'
export const REQUEST_CARS = "REQUEST_CARS"
export const REQUEST_USERS = "REQUEST_USERS"
export const POST_USERS = "POST_USERS"

export function getCars(){
    return async function (dispatch) {
         try {
             const cars = await axios.get("https://server.cocoche.com.ar/car_listing_presentation?list_length=100")
             return dispatch({
                 type: REQUEST_CARS,
                 payload: cars.data.carList
             })
         }
         catch(error) {
             console.log(error)
         }
    };   
 };

 export function getUsers() {
    return async function(dispatch) {
        try {
            const users = await axios.get("http://localhost:3001/get_users")
            return dispatch({
                type: REQUEST_USERS,
                payload: users.data
            });
        }   
        catch(error) {
            console.log(error)
        } 
    };
 };

 export function registerUser(user) {
        return async function(dispatch) {
            try {
               /*  let idResponse; */
                await axios.post("http://localhost:3001/create_user", user)
              /*   .then((source) => {
                    idResponse = source.data
                });
                    return dispatch({
                        type: POST_USERS,
                        payload: idResponse
                    }) */
    
            }
            catch(error) {
                console.log(error)
            }
        };
    
 };