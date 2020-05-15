import { createStore } from 'redux';
import todoApp from './app/reducers';
import React  from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const store = createStore(todoApp)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);