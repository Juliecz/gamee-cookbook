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

export const getRecipeDetail = (id) => (dispatch) => {
	API.getRecipeById(id)
		.then((response) => dispatch(saveRecipeDetail(response.data)))
		.catch(err => console.log(err));
};

const saveRecipeDetail = (recipe) => ({
	type: types.GET_RECIPE_BY_ID,
	recipe
});

export const setLoader = (value) => ({
	type: types.SET_LOADER,
	value
});