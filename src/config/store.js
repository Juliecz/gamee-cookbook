import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const DEBUG = process.env.NODE_ENV !== 'production';

const composeEnhancers =
	(DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const logger = createLogger({
	predicate: (getState, action) => DEBUG
});

const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(routerMiddleware(browserHistory),
		thunk,
		logger
	))
);

export default store;
