import api from './config';

export const getRecipes = () =>
	api.get('/recipes');

export const getRecipeById = (id) =>
	api.get(`/recipes/${id}`);

export const postRecipes = (recipe) =>
	api.post('/recipes', recipe);

export const updateRecipes = (recipe) =>
	api.put('/recipes', recipe);

export const deleteRecipes = (id) =>
	api.delete(`/recipes/${id}`);

export const signIn = (user) =>
	api.post('/signin', user);

export const signUp = (user) =>
	api.post('/signup', user);