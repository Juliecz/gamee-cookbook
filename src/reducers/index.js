import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import user from './user';
import recipes from './recipes';
import forms from './forms';

export default combineReducers({
	user,
	recipes,
	forms,
	toastrReducer,
	routing: routerReducer
});