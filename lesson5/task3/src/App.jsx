import React from 'react';
import UsersList from './users/UsersList';
import Filter from './Filter';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Filter />
        <UsersList />
      </Provider>
    </div>
  )
}

export default App;