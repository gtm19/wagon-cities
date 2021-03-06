// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import citiesReducer from './reducers/cities_reducer';
import activeCityReducer from './reducers/active_city_reducer';

// Middleware
const middleware = applyMiddleware(logger, reduxPromise);

// Combine the reducers
const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middleware)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
