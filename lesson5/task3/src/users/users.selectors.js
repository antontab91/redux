const usersSelectors = state => {
  const filterText = state.users.filterText;
  const usersList = state.users.usersList;

  return usersList.filter((el) => {
    return el.includes(filterText)
  })
}