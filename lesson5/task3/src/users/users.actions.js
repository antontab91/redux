export const HANDLE_CHANGE = 'USERS/HANDLE_CHANGE';

export const handleChange = (event) => {
  return {
    type: HANDLE_CHANGE,
    payload: event.target.value,
  }
}
