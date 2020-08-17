import { createStore } from 'redux';

const ADD_USER = 'USERS/ADD_USER';
const REMOVE_USER = 'USERS/REMOVE_USER';
const UPDATE_USER = 'USERS/UPDATE_USER';

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      user: user,
    }
  }
}

const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: {
      id: id,
    }
  }
}

const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      userData: userData,
    }
  }
}

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


const store = createStore(usersReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(addUser({ id: 54, name: 'Bob' }))
store.dispatch(addUser({ id: 45, name: 'Mel' }))
store.dispatch(addUser({ id: 21, name: 'Rob' }))
store.dispatch(addUser({ id: 89, name: 'Hop' }))
store.dispatch(removeUser(89))
store.dispatch(updateUser(21, { male: 'famile' }))