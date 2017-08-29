import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import Modal from '../../components/RecipeModal/RecipeModal';
import { ClipLoader } from 'halogen';
import './Recipe.css';

class Recipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			record: {}
		};
	}
	
	componentDidMount() {
		if (this.props.params.id) {
			this.props.getDetail(this.props.params.id);
		}
	}
	
	closeModal = () => this.setState({ showModal: false, record: {} });
	
	openModal = () => this.setState({ showModal: true, record: this.props.recipe });
	
	onChange = (e) => {
		console.log(e.target.id, e.target.value);
		this.setState({ record: {...this.state.record, [e.target.id]: e.target.value } });
	};
	
	deleteTag = (tag) => {
		this.setState({
			record: {
				...this.state.record,
				categories: this.state.record.categories.filter((c) => c !== tag)
			}
		});
	};
	
	addTag = (tag) => {
		this.setState({
			record:
				{
					...this.state.record,
					categories: [...this.state.record.categories, tag]
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
	
	postRecipe = (record) => {
		if (record._id) {
			this.props.updateRecipe(record);
			return this.closeModal();
		}
		return this.props.postRecipe(record);
	};
	
	deleteRecipe = (id) => {
		this.props.deleteRecipe(id);
	};
	
	render() {
		const { recipe, user, loader } = this.props;
		if (loader) {
			return <div style={{ marginTop: '200px' }}>
				<ClipLoader
					color="#bc2328"
					size="80px"
					margin="500px"
				/>
			</div>
		}
		return (<div className="detail">
			{ recipe && Object.keys(recipe).length > 0 && (<div>
				<div className="detail__header">
					<div>
						<h3>{recipe.name}</h3>
						<div className="detail__header-tags">
							<span
								style={{
									padding: '7px'
								}}
							>Tags:</span>
							{recipe.categories.map((tag) =>
								<span className="ReactTags__tag">
								{tag}
							</span>)}
						</div>
					</div>
					{ recipe.authorId === user._id &&
					<div>
						<Button
							onClick={this.openModal}
							bsSize="small"
							style={{margin: '2px'}}
						>Edit</Button>
						<Button
							bsStyle="danger"
							bsSize="small"
							style={{margin: '2px'}}
							onClick={() => this.deleteRecipe(recipe._id)}
						>Remove</Button>
					</div>}
				</div>
				<img
					src={recipe.image}
					alt="Image"
					className="detail__image"
				/>
				{recipe.time &&
				<div className="detail__time">
					<Glyphicon glyph="time"/>
					<div className="detail__time-info">
						<span>Time: </span>
						<span>{recipe.time} minutes</span>
					</div>
				</div>}
				{recipe.ingredients && recipe.ingredients.length > 0 &&
				<div className="detail__ingredients">
					<h4>Ingredients</h4>
					<ul>
						{recipe.ingredients.map((ingredient) => <li>{ingredient}</li>) }
					</ul>
				</div>}
				<div className="detail__directions">
					{ recipe.directions}
				</div>
				
				<Modal
					record={this.state.record}
					show={this.state.showModal}
					close={this.closeModal}
					onChange={this.onChange}
					addTag={this.addTag}
					deleteTag={this.deleteTag}
					postRecipe={this.postRecipe}
					addIngredient={this.addIngredient}
					deleteIngredient={this.deleteIngredient}
				/>
			</div>) }
		</div>);
	}
}

export default Recipe;