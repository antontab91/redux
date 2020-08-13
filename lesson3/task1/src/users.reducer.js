import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user),
      }
    }

    case DELETE_USER: {
      const newList = state.usersList.filter((user) => {
        return user.id !== action.payload.id;
      })

      return {
        ...state,
        usersList: newList,
      }
    }

    case UPDATE_USER: {
      const newList = state.usersList.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload.userData,
          }
        }
        return user
      })

      return {
        ...state,
        usersList: newList,
      }
    }


    default:
      return state;
  }
}
