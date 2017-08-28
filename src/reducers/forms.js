import * as types from '../actions/types';
const initialState = {
	signin: {
		show: false,
		name: '',
		email: '',
		password: ''
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SIGNIN_UPDATE:
			return { ...state, signin: {
				...state.signin,
				[action.id]: action.value}
			};
		case types.OBJECT_UPDATE:
			return { ...state, [action.id]: { ...action.value } };
		default:
			return state;
	}
};