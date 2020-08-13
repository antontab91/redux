const ADD_USER = 'USERS/ADD_USER';
const DELETE_USER = 'USERS/DELETE_USER';
const UPDATE_USER = 'USERS/UPDATE_USER';

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  }
}


const initialState = {
  usersList: []
}

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {

      }

    case DELETE_USER:
      return {

      }

    case UPDATE_USER:
      return {

      }


    default:
      break;
  }
}



