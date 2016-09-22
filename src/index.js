import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = createStore(reducers, applyMiddleware());

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
  , document.querySelector('.container'));
