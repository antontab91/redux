import { createStore } from 'redux';

const ADD_USER = 'USERS/ADD_USER';
const DELETE_USER = 'USERS/DELETE_USER';
const UPDATE_USER = 'USERS/UPDATE_USER';

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      user: user,
    },
  }
}

const deleteUSer = (id) => {
  return {
    type: DELETE_USER,
    payload: {
      id: id
    },
  }
}

updateUser = (id, userData){
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      userData: userData,
    }
  }
}


const


// const store = createStore(userReducer);

// store.dispatch(addUser({ id: 76, name: 'Sarah' }))
// store.dispatch(addUser({ id: 72, name: 'Bublik' }))
// store.dispatch(addUser({ id: 71, name: 'Suchka' }))
// store.dispatch(deleteUser(76))
// store.dispatch(updateUser(71, { id: 72, name: 'Bublik' }))
// console.log(store.getState());



