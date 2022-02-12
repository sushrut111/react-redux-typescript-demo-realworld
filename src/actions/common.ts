import { NETWORK_CALL_ERRORED, SUCCESS_NOTIFICATION } from "../constants/actionTypes"

export const NetworkCalledFailedAction = (message: string) => {
    return {
        type: NETWORK_CALL_ERRORED,
        message
    }
}

export const SuccessnNotification = (message: string) => {
    return {
        type: SUCCESS_NOTIFICATION,
        message
    }
}