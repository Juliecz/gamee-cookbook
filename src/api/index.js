import api from './config';

export const getRecipes = () =>
	api.get('/recipes');

export const getRecipeById = (id) =>
	api.get(`/recipes/${id}`);