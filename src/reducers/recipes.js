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
		case types.POST_RECIPES:
			return { ...state, list: [...state.list, action.recipe] };
		case types.UPDATE_RECIPES:
			return {
				...state,
				detail: {...action.recipe},
				list: [...state.list.map((recipe) =>
					recipe._id === action.recipe._id ? {...action.recipe} : {...recipe} )]
			};
		default:
			return state;
	}
};