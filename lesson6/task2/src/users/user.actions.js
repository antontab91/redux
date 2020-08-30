const SHOW_SPINNER = 'USERS/SHOW_SPINNER';
const HIDE_SPINNER = 'USERS/HIDE_SPINNER';
const GET_USER_DATA = 'USERS/GET_USER_DATA';

const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
    payload: {
      showSpinner: true,
    }
  }
}

const hideSpinner = () => {
  return {
    type: HIDE_SPINNER,
    payload: {
      showSpinner: true,
    }
  }
}

const getUserData = (userData) => {
  return {
    type: GET_USER_DATA,
    payload: {
      userData: userData,
    }
  }
}