import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import recipes from './recipes';

export default combineReducers({
	user,
	recipes,
	routing: routerReducer
});