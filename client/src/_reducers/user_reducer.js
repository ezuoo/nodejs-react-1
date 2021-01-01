import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    DELETE_USER
} from '../_actions/types';

export default function foo(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // return to LoginPage/LoginPage.js ( loginUser() )
            return { ...state, login: action.payload };

        case REGISTER_USER:
            return { ...state, register: action.payload };

        case AUTH_USER:
            return { ...state, userData: action.payload };
        
        case DELETE_USER:
            return { ...state, delete: action.payload};

        default:
            return state;
    }
}