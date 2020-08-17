import { ADD_USER, REMOVE_USER, UPDATE_USER } from './users.action';

const initialState = {
  usersList: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.user),
      }
    }

    case REMOVE_USER: {
      const newUsersList = state.usersList.filter((user) => {
        return user.id !== action.payload.id
      })
      return {
        ...state,
        usersList: newUsersList,
      }
    }

    case UPDATE_USER: {

      const newUsersList = state.usersList.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,                              // блин , ну сколько можно тупить .копируем  юзера на этой итерации(если подходит условие)
            ...action.payload.userData          // добавляем все данные в этого юзера (в обьект )
          }
        }
        return user;
      })

      return {
        ...state,
        usersList: newUsersList,
      }
    }

    default:
      return state;
  }
}


export default usersReducer;

