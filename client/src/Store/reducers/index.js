import {combineReducers} from 'redux';
import authReducer from './AuthReducer.js';
import postReducer from './PostReducer.js';
import commentReducer from './CommentReducer.js'

export const reducers = combineReducers({authReducer,postReducer,commentReducer}); 