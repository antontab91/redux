import { GET_USER_RECIVED, SHOW_SPINNER } from './user.actions';

const initialState = {
  isFetching: false,
  userData: null,
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      }
    }


    case GET_USER_RECIVED: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer;