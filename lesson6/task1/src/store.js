import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './counter/counter.reducer';

const storeCombiner = combineReducers({
  counter: counterReducer,
})

const logger = store => next => action => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log('new state', store.getState())
  console.groupEnd();
  return result;
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  storeCombiner,
  composeEnhancers(
    applyMiddleware(logger)
  )

)

export default store;
