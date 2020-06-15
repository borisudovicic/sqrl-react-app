import { combineReducers } from 'redux';
import loggedInUserReducer from './loggedInUserReducer';

export default combineReducers({
  loggedInUser: loggedInUserReducer
})