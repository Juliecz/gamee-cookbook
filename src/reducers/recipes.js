import * as types from '../actions/types';

const initialState = {
	list: [],
	detail: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_RECIPES:
			return { ...state, list: [...action.recipes] };
		case types.GET_RECIPE_BY_ID:
			return { ...state, detail: action.recipe };
		case types.SET_LOADER:
			return { ...state, loader: action.value };
		default:
			return state;
	}
};