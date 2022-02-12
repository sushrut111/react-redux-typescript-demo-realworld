import {
    WALL_LOADED
} from '../constants/actionTypes';
export default (state: any ={}, action: any) => {
    switch(action.type){
        case WALL_LOADED:
            return {
                ...state,
                articles: action.payload.articles 
            }
        default:
            return state;
    }
}