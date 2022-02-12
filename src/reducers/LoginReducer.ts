import {
    LOGIN,
    UPDATE_LOGIN_FIELD
} from '../constants/actionTypes';

export default (state = {}, action: any) => {
    switch(action.type){
        case LOGIN:
            return {
               ...state,
               username: action.payload.user.username
            }
        case UPDATE_LOGIN_FIELD:
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state;
    }
}