import { createStore } from 'redux';

const SET_LANGUAGE = 'CART/LANGUAGE'

const setLanguage = (lang) => {
  return {
    type: SET_LANGUAGE,
    payload: {
      lang,
    }
  }
}

const initialLanguage = 'en'

const languageReducer = (state = initialLanguage, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return state = action.payload.lang;

    default:
      return state

  }
}

const store = createStore(languageReducer);
store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('ru'));
store.dispatch(setLanguage('en'));

// console.log(store.getState());

