export const TOGGLE_OPTIONS = 'OPTIONS/TOGGLE_OPTIONS';

export const toggleOption = (id) => {
  return {
    type: TOGGLE_OPTIONS,
    payload: {
      id
    }
  }
}
