import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const store = createStore(
	rootReducer,
	applyMiddleware(routerMiddleware(browserHistory), thunk, logger)
);

export default store;