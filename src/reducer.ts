import Login from './reducers/LoginReducer';
import Common from './reducers/CommonReducer';
import Wall from './reducers/WallReducer';
import Tags from './reducers/TagsReducer';
import Editor from './reducers/EditorReducer';
import Register from './reducers/RegisterReducer';
import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
export default (history: any) => {
    return combineReducers({
        Login,
        Common,
        Wall,
        Tags,
        Editor,
        Register,
        router: connectRouter(history)
    });
}