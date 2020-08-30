export const SHOW_SPINNER = 'USERS/SHOW_SPINNER';
export const HIDE_SPINNER = 'USERS/HIDE_SPINNER';
export const GET_USER_DATA = 'USERS/GET_USER_DATA';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
    payload: {
      showSpinner: true,
    }
  }
}

export const hideSpinner = () => {
  return {
    type: HIDE_SPINNER,
    payload: {
      showSpinner: true,
    }
  }
}

export const getUserData = (userData) => {
  return {
    type: GET_USER_DATA,
    payload: {
      userData: userData,
    }
  }
}