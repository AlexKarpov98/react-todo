import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers'

const logger = store => {
  return next => {
      return action => {
        console.log('[Middleware] Dispatching', action);
        const result = next(action);
        console.log('[Middleware] next state', store.getState());
        return result;
      }
  }
};

const store = createStore(reducer, ( applyMiddleware(logger) ) );

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
