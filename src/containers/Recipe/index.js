import { connect } from 'react-redux';
import RecipeComponent from './Recipe';
import { push } from 'react-router-redux';

import * as actions from '../../actions/recipesAction';
import { selectRecipe } from './selectors';

const mapStateToProps = (state) => {
	return {
		selected: state.recipes.selected,
		recipe: selectRecipe(state)
	};
};

const mapDispatchToProps = (dispatch) => ({
	redirect: (path) => dispatch(push(path))
});

const Recipe = connect(mapStateToProps, mapDispatchToProps)(RecipeComponent);
export default Recipe;