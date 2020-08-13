export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';
export const UPDATE_USER = 'USERS/UPDATE_USER';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      user: user,
    },
  }
}

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: {
      id: id
    },
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