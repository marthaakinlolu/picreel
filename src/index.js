import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
