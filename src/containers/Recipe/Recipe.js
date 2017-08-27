import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Modal from '../../components/RecipeModal/RecipeModal';
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
	
	render() {
		const { recipe } = this.props;
		
		return (<div className="detail">
			{ recipe && Object.keys(recipe).length > 0 && (<div>
				<div className="detail__header">
					<div>
						<h3>{recipe.name}</h3>
						{recipe.categories.map((tag) =>
							<span className="ReactTags__tag">
								{tag}
							</span>)}
					</div>
					<div>
						<Button onClick={this.openModal}>Edit</Button>
					</div>
				</div>
				<img
					src={recipe.image}
					alt="Image"
					className="detail__image"
				/>
				<div>
					{ recipe.ingredients && recipe.ingredients.map((ingredient) => <div>{ingredient}</div>) }
				</div>
				<div>
					{ recipe.directions}
				</div>
				
				<Modal
					record={this.state.record}
					show={this.state.showModal}
					close={this.closeModal}
					onChange={this.onChange}
					addTag={this.addTag}
					deleteTag={this.deleteTag}
				/>
			</div>) }
		</div>);
	}
}

export default Recipe;