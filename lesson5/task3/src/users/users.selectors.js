export const usersSelectors = state => {
  const filterText = state.users.filterText;
  const usersList = state.users.usersList;

  return usersList.filter((user) => {
    return user.name.toLowerCase().includes(filterText.toLowerCase());
  })
}