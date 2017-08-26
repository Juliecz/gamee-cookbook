export const selectRecipe = (state) => {
	if (state.recipes.selected && state.recipes.list && state.recipes.list.length) {
		return state.recipes.list.find((recipe) => recipe._id === state.recipes.selected);
	}
	return null;
};