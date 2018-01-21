import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './styles/index.css';
import App from './App';
import thunk from 'redux-thunk';
import { geoWeatherApp, initialState } from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  geoWeatherApp,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
)
