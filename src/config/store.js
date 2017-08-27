import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(routerMiddleware(browserHistory), thunk, logger))
);

export default store;