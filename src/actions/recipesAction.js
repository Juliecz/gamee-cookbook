import * as types from './types';
import * as API from '../api/index';

export const getRecipes = () => (dispatch) => {
	API.getRecipes()
		.then((response) => dispatch(saveRecipes(response.data)))
		.catch(err => console.log(err));
};

const saveRecipes = (recipes) => ({
	type: types.GET_RECIPES,
	recipes
});

export const selectRecipe = (id) => ({
	type: types.SELECT_RECIPE,
	id
});

