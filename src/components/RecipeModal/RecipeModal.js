import React from 'react';
import { Modal, Button, Glyphicon, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { WithContext as Tags } from 'react-tag-input';
import Canvas from '../Canvas/index';
import './RecipeModal.css';

const RecipeModal = ({user, record, show, close, onChange, addTag, deleteTag, postRecipe, deleteIngredient, addIngredient}) =>
	(<Modal
		show={show}
		onHide={close}
	>
		<form onSubmit={(event) => {
			event.preventDefault();
			postRecipe(record);
		}}>
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
						required
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
					<Canvas />
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
						placeholder="Add new ingredient"
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
						rows="10"
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
				<Button type="button" onClick={close}>Cancel</Button>
				<Button
					type="submit"
					bsStyle="primary"
				>Save</Button>
			</Modal.Footer>
		</form>
	</Modal>);

export default RecipeModal;