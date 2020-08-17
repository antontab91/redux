import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './users/users.reducer';
import './counter/counter.action';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);


