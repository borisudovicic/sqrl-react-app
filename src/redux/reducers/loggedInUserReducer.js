import { UPDATE_LOGGED_IN_USER } from '../actions/loggedInUserAction';

export default function loggedInUserReducer(state=null, action){
  switch(action.type){
    case UPDATE_LOGGED_IN_USER:
      return action.payload;
    default: return state;
  }
}