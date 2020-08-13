const ADD_USER = 'USERS/ADD_USER';
const DELETE_USER = 'USERS/DELETE_USER';
const UPDATE_USER = 'USERS/UPDATE_USER';

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: { user },
  }
}

const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: { id }
  }
}

const updateUser = (user, id) => {
  return {
    type: UPDATE_USER,
    payload: {
      user,
      id
    }
  }
}


const initialState = {
  usersList: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user),
      }

    case DELETE_USER:
      const newList = state.usersList.filter((user) => {
        return user.id !== action.payload.id;
      })

      return {
        ...state,
        usersList: newList,
      }

    case UPDATE_USER:
      return {
        ...state,

      }


    default:
      break;
  }
}



