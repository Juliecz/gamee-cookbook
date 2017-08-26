import React, { Component } from 'react';
import { Button, Modal, Glyphicon, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { WithContext as Tags } from 'react-tag-input';
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
					show={this.state.showModal}
					onHide={this.closeModal}
				>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.record.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<ControlLabel>Name</ControlLabel>
							<FormControl
								type="text"
								id="name"
								value={this.state.record.name}
								onChange={this.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Directions</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="Directions"
								id="directions"
								value={this.state.record.directions}
								onChange={this.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Ingredients</ControlLabel>
							<FormControl
								type="text"
								id="name"
								render={() => <div>goflk sldjfsdf</div>}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Time</ControlLabel>
							<FormControl
								type="number"
								id="time"
								value={this.state.record.time}
								onChange={this.onChange}
								max="500"
								min="0"
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Tags</ControlLabel>
							<div className="ReactTags">
								{ this.state.record
								&& this.state.record.categories
								&& this.state.record.categories
									.map((tag) => <span className="ReactTags__tag">
									{tag}
										<a
											className="ReactTags__remove"
											onClick={() => this.deleteTag(tag)}
										>x</a>
								</span>) }
							</div>
							<Tags
								handleAddition={this.addTag}
								handleDelete={() =>
									this.deleteTag(this.state.record.categories[this.state.record.categories.length-1])}
							/>
						</FormGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModal}>Close</Button>
						<Button onClick={this.closeModal}>Save</Button>
					</Modal.Footer>
				</Modal>
			</div>) }
		</div>);
	}
}

export default Recipe;