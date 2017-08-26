import React, { Component } from 'react';
import { RECIPES } from '../../actions/routes';

class Recipe extends Component {
	
	componentDidMount() {
		if (!this.props.recipe) {
			this.props.redirect(RECIPES);
		}
	}
	
	render() {
		const { recipe } = this.props;
		console.log(recipe);
		
		return (<div>
			{recipe.name}
		</div>);
	}
}

export default Recipe;