import { GET_USER_DATA, SHOW_SPINNER, HIDE_SPINNER } from './user.actions';

const initialState = {
  showSpinner: false,
  userData: null,
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {



    default: {
      return state
    }
  }
}

export default usersReducer;