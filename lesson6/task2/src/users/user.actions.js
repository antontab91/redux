import getUserData from './users.gateway';

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
      userData,
    }
  }
}

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpinner())
    getUserData(userName)
      .then((userData) => {
        dispatch(userDataRecived(userData))
      })
  }
}