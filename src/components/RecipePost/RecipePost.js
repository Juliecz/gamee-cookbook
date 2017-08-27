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
		
		<div className="recipepost__info">
			<h4>{recipe.name}</h4>
			<div className="recipepost__list">
				{recipe.categories && recipe.categories.length > 0
				&& recipe.categories.map((item, i) =>
					(<span
						className="ReactTags__tag"
						key={`li_${i}`}>
					{item}
				</span>))}
			</div>
		</div>
	</div>);

RecipePost.propTypes = {
	recipe: PropTypes.object.isRequired
};

RecipePost.defaultProps = {
	recipe: {}
};

export default RecipePost;