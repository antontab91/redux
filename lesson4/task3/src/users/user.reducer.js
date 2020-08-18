import { createStore } from 'redux';


const GO_PREV = 'USERS/GO_PREV';
const GO_NEXT = 'USERS/GO_NEXT';

const goPrev = () => {
  return {
    type: GO_PREV,
  }
}

const goNext = () => {
  return {
    type: GO_NEXT,
  }
}

const users = [
  {
    id: "id-0",
    age: 21,
    name: "Bob",
  },
  {
    id: "id-1",
    age: 17,
    name: "Tom",
  },
  {
    id: "id-2",
    age: 18,
    name: "Tad",
  },
  {
    id: "id-3",
    age: 45,
    name: "Justin",
  },
  {
    id: "id-4",
    age: 45,
    name: "Franklin",
  },
  {
    id: "id-5",
    age: 45,
    name: "John",
  },
  {
    id: "id-6",
    age: 45,
    name: "Andrew",
  },
  {
    id: "id-7",
    age: 45,
    name: "Pol",
  },
  {
    id: "id-8",
    age: 45,
    name: "Ron",
  },
  {
    id: "id-9",
    age: 45,
    name: "Harry",
  },
  {
    id: "id-10",
    age: 45,
    name: "Anna",
  },
];


const initialState = {
  usersList: users,
  currentPage: 0
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_NEXT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }
    }

    case GO_PREV: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    }

    default:
      return state
  }
}

const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
})


store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goPrev())
store.dispatch(goNext())
