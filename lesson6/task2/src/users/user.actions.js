export const SHOW_SPINNER = 'USERS/SHOW_SPINNER';
export const HIDE_SPINNER = 'USERS/HIDE_SPINNER';
export const GET_USER_RECIVED = 'USERS/GET_USER_RECIVED';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  }
}



export const userDataRecived = (userData) => {
  return {
    type: GET_USER_RECIVED,
    payload: {
      userData: userData,
    }
  }
}