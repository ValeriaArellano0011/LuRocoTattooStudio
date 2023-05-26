import axios from 'axios'

const URL_API = 'https://lurocotattoo.fly.dev'

export async function googleAuth() {
    return await axios.get(`${URL_API}/auth/google`)
}

export function loginWithGoogle(accessToken) {
    return async function (dispatch) {
        await axios.post(`${URL_API}/auth/loginwithgoogle`, { accessToken })
            .then(res => {
                dispatch({
                    type: 'LOGIN',
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
        const response = await axios.post(`${URL_API}/auth/signup`, {
            name,
            lastname,
            email,
            password
        });
        const data = await response.data;
        return dispatch({
            type: 'SIGNUP',
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
                dispatch({
                    type: 'LOGIN',
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
                    type: 'UPDATE_USER_PHOTO',
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
            { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => {
                dispatch({
                    type: 'POST_TATTOOS'
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

// export async function uploadMyTattoos(formData) {
//     await axios.post(`${URL_API}/tatuajes/uploadmytattoos`, formData,
//     {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch((e) => {
//         console.log(e);
//     })
// }

//----------------artistas ---------------

export function getArtistas() {
    return async function (dispatch) {
        await axios.get(`${URL_API}/artistas`)
            .then(res => {
                dispatch({
                    type: 'GET_ARTISTS',
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
                    type: 'GET_ARTIST',
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
                    type: 'GET_TATTOS_BY_ARTIST',
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
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        return dispatch({
            type: 'NEW_ARTIST',
            payload: res.data.response
        })
    }
};

export function removeArtist(artistId) {
    return async function (dispatch) {
        await axios.delete(`${URL_API}/artistas/${artistId}`)
            .then(res => {
                dispatch({
                    type: 'DELETE_ARTIST',
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
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        return dispatch({
            type: 'EDIT_ARTIST',
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
                    type: 'GET_PRODUCTS',
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
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        return dispatch({
            type: 'ADD_PRODUCT',
            payload: res.data.response
        })
    }
};

export function removeProduct(id) {
    return async function (dispatch) {
        await axios.delete(`${URL_API}/productos/${id}`)
            .then(res => {
                dispatch({
                    type: 'DELETE_PRODUCT',
                    payload: res.data.response
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const editProduct = (formData, productId) => {
    console.log('entrara?', productId)
    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
    return async function (dispatch) {
        await axios.put(`${URL_API}/productos/${productId}`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then(res => {
            console.log('entra 5')
            dispatch({
                type: 'EDIT_PRODUCT',
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
                    type: 'PENDING_TATTOOS',
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
                    type: 'GET_JOBS',
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
                type: 'GET_JOBS',
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
                    type: 'CRATE_APPOINTMENT',
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
                    type: 'GET_APPOINTMENTS',
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
        type: 'GET_NAV_STATE',
        payload: e
    }
}