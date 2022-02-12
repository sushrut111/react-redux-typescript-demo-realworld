import Login from './reducers/LoginReducer';
import Common from './reducers/CommonReducer';
import Wall from './reducers/WallReducer';
import Tags from './reducers/TagsReducer';
import Editor from './reducers/EditorReducer';
import {combineReducers} from 'redux';
export default combineReducers({
    Login,
    Common,
    Wall,
    Tags,
    Editor
});