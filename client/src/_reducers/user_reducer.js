import { 
    LOGIN_USER, 
    REGISTER_USER,
    MESSAGE_SEND
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // return to LoginPage/LoginPage.js ( loginUser() )
            return { ...state, loginState : action.payload};

        case REGISTER_USER:
            return { ...state, register : action.payload};
        
        default:
            return state;
    }
}