import React, { Component, PropTypes } from 'react';
import Recipe from '../../components/RecipePost/RecipePost';
import { FormControl, Button } from 'react-bootstrap';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import { ClipLoader } from 'halogen';
import './Recipes.css';

class Recipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: '',
			showRecipeModal: false,
			record: {}
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
	
	closeRecipeModal = () => this.setState({ showRecipeModal: false, record: {} });
	
	openRecipeModal = () => this.setState({ showRecipeModal: true });
	
	onChangeState = (e) => this.setState({ record: {...this.state.record, [e.target.id]: e.target.value} });
	
	deleteTag = (tag) => {
		this.setState({
			record: {
				...this.state.record,
				categories: this.state.record.categories
					? this.state.record.categories.filter((c) => c !== tag) : []
			}
		});
	};
	
	addTag = (tag) => {
		this.setState({
			record:
				{
					...this.state.record,
					categories: this.state.record.categories
						? [...this.state.record.categories, tag] : [tag]
				}
		})
	};
	
	deleteIngredient = (tag) => {
		this.setState({
			record: {
				...this.state.record,
				ingredients: this.state.record.ingredients
					? this.state.record.ingredients.filter((c) => c !== tag) : []
			}
		});
	};
	
	addIngredient = (tag) => {
		this.setState({
			record:
				{
					...this.state.record,
					ingredients: this.state.record.ingredients
						? [...this.state.record.ingredients, tag] : [tag]
				}
		})
	};
	
	postRecipe = (recipe) => {
		this.props.postRecipe(recipe);
		//TODO
		this.closeRecipeModal();
	};
	
	render() {
		const { recipes, loader, user, redirect } = this.props;
		if (loader) {
			return <div style={{ marginTop: '200px' }}>
				<ClipLoader
					color="#bc2328"
					size="80px"
					margin="500px"
				/>
			</div>
		}
		return (<div className="recipes">
			<div className="recipes__header">
				<h3> Recipes </h3>
				<div className="recipes__header-bar">
					<FormControl
						type="text"
						value={this.state.filter}
						placeholder={'Search'}
						onChange={(e) =>
							this.setState({ filter: e.target.value })}
					/>
					{user && Object.keys(user).length > 0
					&& <Button
						onClick={this.openRecipeModal}
					>Add new recipe</Button>}
				</div>
			</div>
			
			<RecipeModal
				user={user}
				record={this.state.record}
				show={this.state.showRecipeModal}
				close={this.closeRecipeModal}
				onChange={this.onChangeState}
				addTag={this.addTag}
				deleteTag={this.deleteTag}
				postRecipe={this.postRecipe}
				addIngredient={this.addIngredient}
				deleteIngredient={this.deleteIngredient}
			/>
			
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