import { connect } from 'react-redux';
import RecipesComponent from './Recipes';
import { push } from 'react-router-redux';
import * as actions from '../../actions/recipesActions';

const mapStateToProps = (state) => ({
	recipes: state.recipes.list,
	user: state.user,
	loader: state.recipes.loader
});

const mapDispatchToProps = (dispatch) => ({
	getRecipes: () => dispatch(actions.getRecipes()),
	postRecipe: (recipe) => dispatch(actions.postRecipe(recipe)),
	redirect: (path) => dispatch(push(path))
});

const Recipes = connect(mapStateToProps, mapDispatchToProps)(RecipesComponent);
export default Recipes;