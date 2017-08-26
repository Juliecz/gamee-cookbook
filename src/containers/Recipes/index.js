import { connect } from 'react-redux';
import RecipesComponent from './Recipes';
import { push } from 'react-router-redux';

import * as actions from '../../actions/recipesAction';

const mapStateToProps = (state) => ({
	recipes: state.recipes.list
});

const mapDispatchToProps = (dispatch) => ({
	getRecipes: () => dispatch(actions.getRecipes()),
	selectRecipe: (id) => dispatch(actions.selectRecipe(id)),
	redirect: (path) => dispatch(push(path))
});

const Recipes = connect(mapStateToProps, mapDispatchToProps)(RecipesComponent);
export default Recipes;