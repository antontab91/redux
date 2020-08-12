import { addUser, deleteUser } from './users.actions';

const initialState = {
  usersList: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return Object.assign({}, state, {
        usersList: [
          ...state.usersList,
          {
            id: action.user.id,
            name: action.user.name,
          }
        ]
      })

    case "DELETE_USER":
      const updateUsersList = state.usersList.filter((el) => {
        return el.id !== action.id;
      })
      return {
        usersList: updateUsersList,
      }

    default:
      return state
  }
}