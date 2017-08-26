import { connect } from 'react-redux';
import RecipeComponent from './Recipe';

import * as actions from '../../actions/recipesAction';

const mapStateToProps = (state) => {
	return {
		recipe: state.recipes.detail
	};
};

const mapDispatchToProps = (dispatch) => ({
	getDetail: (recipeId) => dispatch(actions.getRecipeDetail(recipeId))
});

const Recipe = connect(mapStateToProps, mapDispatchToProps)(RecipeComponent);
export default Recipe;