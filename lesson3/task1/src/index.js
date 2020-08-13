import { createStore } from 'redux';

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

const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      userData,
      id
    }
  }
}


const initialState = {
  usersList: []
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
            ...action.payload.userData
          }
        }
        return user;
      })

      return {
        ...state,
        usersList: newList,
      }
    }



    default:
      return state
  }
}

const store = createStore(userReducer);

store.dispatch(addUser({ id: 76, name: 'Sarah' }))
store.dispatch(addUser({ id: 72, name: 'Bublik' }))
store.dispatch(addUser({ id: 71, name: 'Suchka' }))
store.dispatch(deleteUser(76))
store.dispatch(updateUser(71, { id: 72, name: 'Bublik' }))
console.log(store.getState());



