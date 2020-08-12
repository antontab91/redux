export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user,
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id,
  }
}