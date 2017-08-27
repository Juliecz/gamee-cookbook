import * as types from '../actions/types';
const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SIGNIN_SUCCESS:
			return { ...action.user };
		case types.LOGOUT:
			return initialState;
		default:
			return state;
	}
};