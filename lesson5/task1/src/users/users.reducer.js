const NEXT_PAGE = 'PAGINATION/NEXT_PAGE';
const PREV_PAGE = 'PAGINATION/PREV_PAGE';

const goNext = () => {
  return {
    type: NEXT_PAGE;
  }
}

const goPrev = () => {
  return {
    type: PREV_PAGE;
  }
}

initialState = {
  users: {
    usersList: users,
  },

  currentPage: 0
}

const usersReducer = (state, action) => {
  switch (action.type) {

    case NEXT_PAGE: {
      return {
        ...state,
        currentPage: currentPage + 1;
      }
    }

    case PREV_PAGE: {
      return {
        ...state,
        currentPage: currentPage + 1;
      }
    }


    default:
      return state;
  }
}