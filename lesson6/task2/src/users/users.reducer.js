import { GET_USER_DATA, SHOW_SPINNER, HIDE_SPINNER } from './user.actions';

const initialState = {
  showSpinner: false,
  userData: null,
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case SHOW_SPINNER: {
      return {
        ...state,
        showSpinner: action.payload.showSpinner,
      }
    }

    case HIDE_SPINNER: {
      return {
        ...state,
        showSpinner: action.payload.showSpinner,
      }
    }

    case GET_USER_DATA: {
      return {
        ...state,
        userData: action.payload.userData,
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer;