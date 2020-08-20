export const TOGGLE_OPTIONS = 'OPTIONS/TOGGLE_OPTIONS';

export const toggleOptions = (optionId) => {
  return {
    type: TOGGLE_OPTIONS,
    payload: {
      optionId,
    }
  }
}

