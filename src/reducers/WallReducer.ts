import {
    ARTICLES_FETCHED,
    WALL_LOADED
} from '../constants/actionTypes';
export default (state: any ={}, action: any) => {
    switch(action.type){
        case ARTICLES_FETCHED:
            return {
                ...state,
                articles: action.payload.articles 
            }
        default:
            return state;
    }
}