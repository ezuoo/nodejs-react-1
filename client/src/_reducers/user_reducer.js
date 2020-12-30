import { LOGIN_USER } from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
                // return to LoginPage/LoginPage.js ( loginUser() )
                return { ...state, loginState : action.payload};

        default:
            return state;
    }
}