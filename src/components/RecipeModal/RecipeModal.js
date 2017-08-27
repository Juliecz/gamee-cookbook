import React from 'react';
import {Modal, Button, Glyphicon, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {WithContext as Tags} from 'react-tag-input';

const RecipeModal = ({user, record, show, close, onChange, addTag, deleteTag, postRecipe, deleteIngredient, addIngredient}) =>
	(<Modal
		show={show}
		onHide={close}
	>
		<Modal.Header closeButton>
			<Modal.Title>{record._id ? record.name : 'New recipe'}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<FormGroup>
				<ControlLabel>Name</ControlLabel>
				<FormControl
					type="text"
					id="name"
					placeholder="Name"
					value={record.name}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Image</ControlLabel>
				<FormControl
					type="text"
					id="image"
					placeholder="Image"
					value={record.image}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Ingredients</ControlLabel>
				<div className="ReactTags">
					{ record
					&& record.ingredients
					&& record.ingredients.map((ingredient) =>
						<span className="ReactTags__tag">
							{ingredient}
							<a
								className="ReactTags__remove"
								onClick={() => deleteIngredient(ingredient)}
							>x</a>
						</span>) }
				</div>
				<Tags
					handleAddition={addIngredient}
					handleDelete={() =>
						deleteIngredient(record.ingredients[record.ingredients.length - 1])}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Directions</ControlLabel>
				<FormControl
					componentClass="textarea"
					placeholder="Directions"
					id="directions"
					value={record.directions}
					onChange={onChange}
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Time</ControlLabel>
				<FormControl
					type="number"
					id="time"
					placeholder="Time"
					value={record.time}
					onChange={onChange}
					max="500"
					min="0"
				/>
			</FormGroup>
			<FormGroup>
				<ControlLabel>Tags</ControlLabel>
				<div className="ReactTags">
					{ record
					&& record.categories
					&& record.categories
						.map((tag) => <span className="ReactTags__tag">
									{tag}
							<a
								className="ReactTags__remove"
								onClick={() => deleteTag(tag)}
							>x</a>
								</span>) }
				</div>
				<Tags
					handleAddition={addTag}
					handleDelete={() =>
						deleteTag(record.categories[record.categories.length - 1])}
				/>
			</FormGroup>
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={close}>Cancel</Button>
			<Button
				bsStyle="primary"
				onClick={() => postRecipe(record)}
			>Save</Button>
		</Modal.Footer>
	</Modal>);

export default RecipeModal;