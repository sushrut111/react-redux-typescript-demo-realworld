import { UPDATE_EDITOR_FIELD } from "../constants/actionTypes";

export default (state: any={}, action: any) => {
    switch(action.type){
        case UPDATE_EDITOR_FIELD:
            console.log(action);
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state;
    }
}