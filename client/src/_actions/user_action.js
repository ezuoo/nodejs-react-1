import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(dataSubmit) {
    
    // get data from the server '/api/userd/login'
    const request = axios.post('/api/users/login', dataSubmit).then(res => res.data);

    // return to _reducers/index.js
    return {
        type: LOGIN_USER,
        payload: request
    }
}