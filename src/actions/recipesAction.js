import * as types from './types';
import * as API from '../api/index';


const saveRecipes = (recipes) => ({
	type: types.GET_RECIPES,
	recipes
});

const saveRecipeDetail = (recipe) => ({
	type: types.GET_RECIPE_BY_ID,
	recipe
});

export const setLoader = (value) => ({
	type: types.SET_LOADER,
	value
});

const postRecipeAction = (recipe) => ({
	type: types.POST_RECIPES,
	recipe
});

const updateRecipeAction = (recipe) => ({
	type: types.UPDATE_RECIPES,
	recipe
});

const deleteRecipeAction = (id) => ({
	type: types.DELETE_RECIPES,
	id
});


export const getRecipes = () => (dispatch) => {
	API.getRecipes()
		.then((response) => dispatch(saveRecipes(response.data)))
		.catch(err => console.log(err));
};

export const getRecipeDetail = (id) => (dispatch) => {
	API.getRecipeById(id)
		.then((response) => dispatch(saveRecipeDetail(response.data)))
		.catch(err => console.log(err));
};

export const postRecipe = (recipe) => (dispatch) => {
	API.postRecipes(recipe)
		.then((response) => dispatch(postRecipeAction(response.data)))
		.catch(err => console.log(err));
};

export const updateRecipe = (recipe) => (dispatch) => {
	API.postRecipes(recipe)
		.then((response) => dispatch(updateRecipeAction(response.data)))
		.catch(err => console.log(err));
};

export const deleteRecipe = (id) => (dispatch) => {
	API.postRecipes(id)
		.then(() => dispatch(deleteRecipeAction(id)))
		.catch(err => console.log(err));
};