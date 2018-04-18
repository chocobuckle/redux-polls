import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from './ducks';
import './index.css';
import App from './App';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ ...reducers, routing: routerReducer }),
  composeEnhancers(applyMiddleware(thunk))
);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App.js').default; // eslint-disable-line global-require
    ReactDOM.render(<NextApp />, rootEl);
  });
}
