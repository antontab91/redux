import React from 'react';
import Users from './users/Users';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider>
      <Users />
    </Provider>
  )
}

export default App;