import { APP_LOADED, DISMISS_NOTIFICATION, NETWORK_CALL_ERRORED, SUCCESS_NOTIFICATION } from "../constants/actionTypes";

export default (state: any = {}, action: any) => {
    switch(action.type){
        case APP_LOADED:
            return {
                ...state,
                user: action.payload.user.username
            }
        case NETWORK_CALL_ERRORED:
            return {
                ...state,
                notification : {
                    message: action.message,
                    type: 'error'
                }
            }
        case SUCCESS_NOTIFICATION:
            return {
                ...state,
                notification : {
                    message: action.message,
                    type: 'success'
                }
            }
    
        case DISMISS_NOTIFICATION:
            return {
                ...state,
                notification: null
            }
        default:
            return state;
    }
}