import { setToken } from "./apis/apis";
import { APP_LOADED, LOGIN, LOGOUT, NETWORK_CALL_ERRORED, POST_CREATE_REQUEST_SENT, SUCCESS_NOTIFICATION } from "./constants/actionTypes";

const dispatchNotificationToStore = (store: any, type: string, message: string) => {
    console.log("here")
    store.dispatch({
        type,
        message
    })
}

export const promiseMiddleware = (store: any) => (next: any) => (action: any) => {
    if(isPromise(action.payload)){
        action.payload.then((r: any) => 
            {
                let message = '';
                if(action.type === LOGIN) {
                    dispatchNotificationToStore(
                        store, SUCCESS_NOTIFICATION, "Successfully logged in!"
                    )
                } else if(action.type === POST_CREATE_REQUEST_SENT) {
                    dispatchNotificationToStore(
                        store, SUCCESS_NOTIFICATION, "Post created successfully!"
                    )
                }
                next({
                    ...action,
                    payload: r.data
                })
            }).catch((e: any) => {
                if(action.type!== APP_LOADED){
                    dispatchNotificationToStore(
                        store, NETWORK_CALL_ERRORED, e.response.data
                    )
                }
                
            })
    } else {
        next(action);
    }
}

export const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
    if(action.type === LOGIN){
        window.localStorage.setItem('jwt', action.payload.user.token);
    }
    if(action.type === LOGOUT){
        window.localStorage.removeItem('jwt');
        setToken(null);
        // window.location.href = "/";
        dispatchNotificationToStore(
            store, SUCCESS_NOTIFICATION, "Logged out!"
        )
    }
    next(action);
}

function isPromise(v: any) {
    return v && typeof v.then === 'function';
}