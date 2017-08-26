import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { RECIPE_DETAIL } from '../../actions/routes';
import './RecipePost.css';

const RecipePost = ({ recipe, selectRecipe, redirect }) =>
	(<div
		className="recipepost"
		onClick={() => {
			selectRecipe(recipe._id);
			redirect(RECIPE_DETAIL);
		}}
	>
		{recipe.image
		&& <img
			className="recipepost__image"
			src={recipe.image}
			alt="Image"
		/>}
		
		<h4>{recipe.name}</h4>
		<Col xs={12} className="recipepost__list">
			{recipe.ingredients && recipe.ingredients.length
			&& recipe.ingredients.map((item, i) =>
				(<Col
					xs={12} md={6} lg={3}
					key={`li_${i}`}>
					{item}
		</Col>))}
		</Col>
	</div>);

RecipePost.propTypes = {
	recipe: PropTypes.object.isRequired
};

RecipePost.defaultProps = {
	recipe: {}
};

export default RecipePost;