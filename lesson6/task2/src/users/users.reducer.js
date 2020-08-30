import { GET_USER_RECIVED, SHOW_SPINNER, HIDE_SPINNER } from './user.actions';

const initialState = {
  isFetching: true,
  userData: null,
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    }

    case HIDE_SPINNER: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    }

    case GET_USER_RECIVED: {
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