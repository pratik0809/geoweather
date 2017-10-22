import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {geoWeather, initialState} from './reducers'

let store = createStore(geoWeather, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root')
)
