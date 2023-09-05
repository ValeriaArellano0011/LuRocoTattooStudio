import axios from 'axios'
import { URL_API } from '../config'
import { 
    GET_ARTIST, 
    GET_ARTISTS, 
    LOGIN, 
    POST_TATTOOS, 
    SIGNUP, 
    LOGIN_GOOGLE,
    UPDATE_USER_PHOTO, 
    GET_TATTOS_BY_ARTIST,
    NEW_ARTIST,
    DELETE_ARTIST,
    EDIT_ARTIST,
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    PENDING_TATTOOS,
    GET_JOBS,
    CREATE_APPOINTMENT,
    GET_APPOINTMENTS,
    GET_NAV_STATE,
    CONTENT_TYPE,
    GET_USER,
    LOGOUT
} from '../misc/redux-consts'

const accesstoken = localStorage.getItem('token');

export async function googleAuth() {
    return await axios.get(`${URL_API}/auth/google`)
}

export function loginWithGoogle(token) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/auth/loginwithgoogle`, { token })
            .then(res => {
                dispatch({
                    type: LOGIN_GOOGLE,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const signup = (name, lastname, email, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${URL_API}/auth/signup/inner`, {
            name,
            lastname,
            email,
            password
        });
        const data = await response.data;
        return dispatch({
            type: SIGNUP,
            payload: data,
        });
    } catch (error) {
        console.log(error)
    }

};

export function login(email, password) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/auth/login`, { email, password })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('accessToken', res.data)
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
                getUser(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function logout() {
    return async function (dispatch) {
        try {
            localStorage.removeItem('token')
            dispatch({
                type: LOGOUT
            })
        } catch (error) {
            console.log(error)
        } 
    }
}

export function getUser(token) {
    console.log('el token: ', token)
    return async function (dispatch) {
        await axios.post(`${URL_API}/auth/getuserbytoken`,{}, {
            headers: {
              Authorization: `${token}`
            }
        })
            .then(res => {
                dispatch({
                    type: GET_USER,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function updateUserPhoto(email, foto) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/auth/updatephoto`, { email, foto })
            .then(res => {
                dispatch({
                    type: UPDATE_USER_PHOTO,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

//----------------clientes ---------------

export function uploadMyTattoos(formData) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/tatuajes/uploadmytattoos`, formData,
            { headers: CONTENT_TYPE })
            .then(() => {
                dispatch({
                    type: POST_TATTOOS
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

//----------------artistas ---------------

export function getArtistas() {
    return async function (dispatch) {
        await axios.get(`${URL_API}/artistas`)
            .then(res => {
                dispatch({
                    type: GET_ARTISTS,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function getOneArtist(id) {
    return async function (dispatch) {
        await axios.get(`${URL_API}/artistas/${id}`)
            .then(res => {
                dispatch({
                    type: GET_ARTIST,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function getArtistTattoos(id) {
    return async function (dispatch) {
        await axios.get(`${URL_API}/tatuajes/artista/${id}`)
            .then(res => {
                dispatch({
                    type: GET_TATTOS_BY_ARTIST,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const addNewArtist = (formData) => {
    return async function (dispatch) {
        const res = await axios.post(
            `${URL_API}/artistas/newartist`,
            formData,
            { headers: CONTENT_TYPE }
        );

        return dispatch({
            type: NEW_ARTIST,
            payload: res.data.response
        })
    }
};

export function removeArtist(artistId) {
    return async function (dispatch) {
        await axios.delete(`${URL_API}/artistas/${artistId}`)
            .then(res => {
                dispatch({
                    type: DELETE_ARTIST,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const editArtist = (formData, artistId) => {
    return async function (dispatch) {
        const res = await axios.put(
            `${URL_API}/artistas/${artistId}`,
            formData,
            { headers: CONTENT_TYPE }
        );
        return dispatch({
            type: EDIT_ARTIST,
            payload: res.data.response
        })
    }
};


//--------------Productos-------------

export function getProducts(search) {
    return async function (dispatch) {
        await axios.get(`${URL_API}/productos/?producto=${search}`)
            .then(res => {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const addProduct = (formData) => {
    return async function (dispatch) {
        const res = await axios.post(
            `${URL_API}/productos`,
            formData,
            { headers: CONTENT_TYPE }
        );
        return dispatch({
            type: ADD_PRODUCT,
            payload: res.data.response
        })
    }
};

export function removeProduct(id) {
    return async function (dispatch) {
        await axios.delete(`${URL_API}/productos/${id}`)
            .then(res => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const editProduct = (formData, productId) => {
    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
    return async function (dispatch) {
        await axios.put(`${URL_API}/productos/${productId}`,
            formData,
            { headers: CONTENT_TYPE }
        ).then(res => {
            dispatch({
                type: EDIT_PRODUCT,
                payload: res.data.response
            })
        }).catch((e) => {
            console.log(e);
        })
    }
};

//--------------Solicitudes-------------

export function getPendings() {
    return async function (dispatch) {
        await axios.get(`${URL_API}/tatuajes/getpendings`)
            .then(res => {
                dispatch({
                    type: PENDING_TATTOOS,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function acceptTattoo(state) {
    return async function (dispatch) {
        try {
            await axios.post(`${URL_API}/tatuajes/accept`, state);
            dispatch(getPendings())
        } catch (error) {
            console.log(error);
            // Manejo del error, por ejemplo, dispatch de una acción de error
        }
    };
}

export function getJobs(id) {
    return async function (dispatch) {
        await axios.get(`${URL_API}/tatuajes/getjobs/${id}`)
            .then(res => {
                dispatch({
                    type: GET_JOBS,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function resetJobs() {
    return async function (dispatch) {
        try {
            dispatch({
                type: GET_JOBS,
                payload: []
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

//------------------- Appointments ------------------

export function sendAppointment(input) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/appointment/create`, input)
            .then(res => {
                dispatch({
                    type: CREATE_APPOINTMENT,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function getAppointments(month) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/appointment/getbymonth`, {month})
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GET_APPOINTMENTS,
                    payload: res.data
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export function getNavState(e){
    return {
        type: GET_NAV_STATE,
        payload: e
    }
}