import { combineReducers } from 'redux';
import postReducer from './postReducer'
import usersReducer from './UsersReducer';

export default combineReducers({
posts: postReducer,
users: usersReducer
});
