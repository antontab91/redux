export const selectUserData = state => {
  return state.users.userData;
}

export const selectIsFetching = state => {
  return state.users.isFetching;
}