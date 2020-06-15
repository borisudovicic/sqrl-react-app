export const UPDATE_LOGGED_IN_USER = 'users:updateLoggedInUser';

export function updateLoggedInUser(newUser){
  return {
    type: UPDATE_LOGGED_IN_USER,
    payload: newUser
  }
}