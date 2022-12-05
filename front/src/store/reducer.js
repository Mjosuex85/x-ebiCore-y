import {REQUEST_CARS, REQUEST_USERS, /* POST_CARS */} from './actions.js'

const initialState = {
    cars: [],
    users: [],
};
 
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case REQUEST_CARS:
            return {
                ...state,
                cars: action.payload
            };
           
        case REQUEST_USERS:
            return {
                ...state,
                users: action.payload
            };

        default: {
            return state
        }
    }
};


