import * as types from '../actions/types';

const initialState = {
	list: [],
	selected: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_RECIPES:
			return { ...state, list: [...action.recipes] };
		case types.SELECT_RECIPE:
			return { ...state, selected: action.id };
		default:
			return state;
	}
};