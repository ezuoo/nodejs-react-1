import axios from 'axios';
import { 
    LOGIN_USER, 
    REGISTER_USER,
    AUTH_USER,
    DELETE_USER
} from './types';

/** login action
 * @param {*} dataSubmit 
 */
export function loginUser(dataSubmit) {
    // get data from the server '/api/userd/login'
    const request = axios.post('/api/users/login', dataSubmit).then(res => res.data);

    // return to _reducers/index.js
    return {
        type: LOGIN_USER,
        payload: request
    }
}

/** register action
 * @param {*} dataSubmit 
 */
export function registerUser(dataSubmit) {
    const request = axios.post('/api/users/register', dataSubmit).then(res => res.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

/** delete aciton
 * @param {*} dataSubmit 
 */
export function deleteUser(dataSubmit) {
     const request =  axios.post('/api/users/delete', dataSubmit).then( res => res.data);
    
        return {
        type: DELETE_USER,
        payload: request
    }
}

/*
export function readUser() {
    //const request =  axios.get('/api/users/read', dataSubmit).then( res => res.data);

    return {
        type: READ_USER,
        payload: request
    }
}*/

/** Authentication action
 * 
 */
export function auth() {
    const request = axios.get('/api/users/auth').then(res => res.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

