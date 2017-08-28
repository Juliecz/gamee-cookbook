import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import recipes from './recipes';
import forms from './forms';

export default combineReducers({
	user,
	recipes,
	forms,
	routing: routerReducer
});