import React, { Component, PropTypes } from 'react';
import Recipe from '../../components/RecipePost/RecipePost';
import './Recipes.css';

class Recipes extends Component {
	
	componentDidMount() {
		this.props.getRecipes();
	}
	
	render() {
		const { recipes, selectRecipe, redirect } = this.props;
		return (<div className="recipes">
			<h2>Recipes</h2>
			<div className="recipes__all">
				{recipes.length
					&& recipes.map((recipe, i) =>
						<Recipe
							key={`recipe_${i}`}
							recipe={recipe}
							selectRecipe={selectRecipe}
							redirect={redirect}
						/>)}
			</div>
		</div>);
	}
}

Recipes.propTypes = {
	recipes: PropTypes.array.isRequired
};

Recipes.defaultProps = {
	recipes: []
};

export default Recipes;