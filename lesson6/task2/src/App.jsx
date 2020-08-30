import React from 'react';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <UserInfo />
        <SearchField />
      </Provider>
      {/* <!-- UserInfo --> */}
      {/* <!-- Spinner --> */}
      {/* <!-- SearchField --> */}
    </div>
  )
}

export default App;