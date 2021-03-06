import { connect } from 'react-redux';
import RecipeComponent from './Recipe';
import * as actions from '../../actions/recipesActions';

const mapStateToProps = (state) => {
	return {
		recipe: state.recipes.detail,
		user: state.user,
		loader: state.recipes.loader
	};
};

const mapDispatchToProps = (dispatch) => ({
	getDetail: (recipeId) => dispatch(actions.getRecipeDetail(recipeId)),
	postRecipe: (recipe) => dispatch(actions.postRecipe(recipe)),
	updateRecipe: (recipe) => dispatch(actions.updateRecipe(recipe)),
	deleteRecipe: (id) => dispatch(actions.deleteRecipe(id)),
});

const Recipe = connect(mapStateToProps, mapDispatchToProps)(RecipeComponent);
export default Recipe;