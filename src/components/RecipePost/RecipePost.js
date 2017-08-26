import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import './RecipePost.css';

const RecipePost = ({ recipe, redirect }) =>
	(<div
		className="recipepost"
		onClick={() => {
			redirect(`/detail/${recipe._id}`);
		}}
	>
		{recipe.image
		&& <img
			className="recipepost__image"
			src={recipe.image}
			alt="Image"
		/>}
		
		<h4>{recipe.name}</h4>
		<div className="recipepost__list">
			{recipe.ingredients && recipe.ingredients.length
			&& recipe.ingredients.map((item, i) =>
				(<div
					key={`li_${i}`}>
					{item}
				</div>))}
		</div>
	</div>);

RecipePost.propTypes = {
	recipe: PropTypes.object.isRequired
};

RecipePost.defaultProps = {
	recipe: {}
};

export default RecipePost;