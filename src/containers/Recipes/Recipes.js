import React, { Component, PropTypes } from 'react';
import Recipe from '../../components/RecipePost/RecipePost';
import { FormGroup, FormControl } from 'react-bootstrap';
import './Recipes.css';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		}
	}
	
	componentDidMount() {
		this.props.getRecipes();
	}
	
	filterByName = (recipe) =>
		recipe.name.toLowerCase()
			.indexOf(this.state.filter.toLowerCase()) > -1
		|| recipe.categories.filter((tag) =>
			tag.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1).length > 0;
	
	render() {
		const { recipes, redirect } = this.props;
		
		return (<div className="recipes">
			<div className="recipes__header">
				<h3>
					Recipes
				</h3>
				<FormControl
					type="text"
					value={this.state.filter}
					placeholder={'Search'}
					onChange={(e) =>
						this.setState({ filter: e.target.value })}
				/>
			</div>
			<div className="recipes__all">
				{recipes.length > 0
				&& recipes
					.filter(this.filterByName)
					.map((recipe, i) =>
						<Recipe
							key={`recipe_${i}`}
							recipe={recipe}
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