import api from './config';

const getHeaderAuth = () => ({ headers: {
	'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
}});

export const getRecipes = () =>
	api.get('/recipes');

export const getRecipeById = (id) =>
	api.get(`/recipes/${id}`);

export const postRecipes = (recipe) =>
	api.post('/recipes', recipe, getHeaderAuth());

export const updateRecipes = (recipe) =>
	api.put('/recipes', recipe, getHeaderAuth());

export const deleteRecipes = (id) =>
	api.delete(`/recipes/${id}`, getHeaderAuth());

export const signIn = (user) =>
	api.post('/signin', user);

export const signUp = (user) =>
	api.post('/signup', user);