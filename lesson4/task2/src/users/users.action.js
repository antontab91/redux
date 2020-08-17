export const ADD_USER = 'USERS/ADD_USER';
export const REMOVE_USER = 'USERS/REMOVE_USER';
export const UPDATE_USER = 'USERS/UPDATE_USER';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      user: user,
    }
  }
}

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: {
      id: id,
    }
  }
}

export const updateUser = (id, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      userData: userData,
    }
  }
}
