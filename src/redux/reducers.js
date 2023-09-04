import {
    GET_ARTIST,
    GET_ARTISTS,
    LOGIN,
    UPDATE_USER_PHOTO,
    GET_TATTOS_BY_ARTIST,
    NEW_ARTIST,
    DELETE_ARTIST,
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    PENDING_TATTOOS,
    GET_JOBS,
    RESET_JOBS,
    CREATE_APPOINTMENT,
    GET_APPOINTMENTS,
    GET_NAV_STATE,
    GET_USER,
    LOGOUT,
    LOGIN_GOOGLE

} from '../misc/redux-consts'

const initialState = {
    token: false,
    currentUser: false,
    artists: [],
    artist: {},
    artistTattoos: [],
    products: [],
    solicitudes: [],
    trabajos: [],
    appointments: [],
    navState: ''
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_GOOGLE:
            return {
                ...state,
                currentUser: action.payload
            };
        case LOGIN:
            return {
                ...state,
                token: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                token: null
            };
        case GET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UPDATE_USER_PHOTO:
            return {
                ...state,
                currentUser: action.payload
            };
        case GET_ARTISTS:
            return {
                ...state,
                artists: action.payload
            };
        case GET_ARTIST:
            return {
                ...state,
                artist: action.payload
            };
        case NEW_ARTIST:
            return {
                ...state,
                artists: [...state.artists, action.payload]
            }
        case GET_TATTOS_BY_ARTIST:
            return {
                ...state,
                artistTattoos: action.payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case DELETE_ARTIST:
            return {
                ...state,
                artists: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: action.payload
            }

        case PENDING_TATTOOS:
            return {
                ...state,
                solicitudes: action.payload
            }
        case GET_JOBS:
            return {
                ...state,
                trabajos: action.payload
            }
        case RESET_JOBS:
            return {
                ...state,
                trabajos: []
            }
        case CREATE_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.appointments, action.payload]
            }
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload
            }
        case GET_NAV_STATE:
            return {
                ...state,
                navState: action.payload
            }
        default:
            return { ...state };
    }
}

