import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './types';

/** login
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

/** register
 * @param {*} dataSubmit 
 */
export function registerUser(dataSubmit) {
    const request = axios.post('/api/users/register', dataSubmit).then(res => res.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}