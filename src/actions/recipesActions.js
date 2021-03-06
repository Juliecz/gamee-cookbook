import * as types from './types';
import * as API from '../api/index';
import { push } from 'react-router-redux';
import * as messages from './messages';
import alert from '../helpers/alert';

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
	dispatch(setLoader(true));
	API.getRecipes()
		.then((response) => dispatch(saveRecipes(response.data)))
		.then(() => dispatch(setLoader(false)))
		.catch(err => {
			alert('error', messages.SERVER_NOT_RESPONDING);
			dispatch(setLoader(false))
		});
};

export const getRecipeDetail = (id) => (dispatch) => {
	dispatch(setLoader(true));
	API.getRecipeById(id)
		.then((response) => dispatch(saveRecipeDetail(response.data)))
		.then(() => dispatch(setLoader(false)))
		.catch(err => {
			alert('error', messages.SERVER_NOT_RESPONDING);
			dispatch(setLoader(false));
		});
};

export const postRecipe = (recipe) => (dispatch, getState) => {
	const userId = getState().user._id;
	recipe = { ...recipe, authorId: userId };
	API.postRecipes(recipe)
		.then((response) => dispatch(postRecipeAction(response.data)))
		.then(() => dispatch(push('/')))
		.catch(err => alert('error', messages.SERVER_NOT_RESPONDING));
};

export const updateRecipe = (recipe) => (dispatch) => {
	API.updateRecipes(recipe)
		.then((response) => dispatch(updateRecipeAction(response.data)))
		.catch(err => alert('error', messages.SERVER_NOT_RESPONDING));
};

export const deleteRecipe = (id) => (dispatch) => {
	API.deleteRecipes(id)
		.then(() => dispatch(deleteRecipeAction(id)))
		.then(() => dispatch(push('/')))
		.catch(err => alert('error', messages.SERVER_NOT_RESPONDING));
};