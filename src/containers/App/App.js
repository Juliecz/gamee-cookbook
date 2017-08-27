import React, {Component} from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModalSignIn: false,
			showRecipeModal: false,
			record: {}
		};
	}
	
	componentDidMount() {
		this.props.authenticate();
	}
	
	closeModalSignIn = () => this.setState({ showModalSignIn: false, record: {} });
	openModalSignIn = () => this.setState({ showModalSignIn: true });
	onChange = (e) => this.setState({
		record: { ...this.state.record, [e.target.id]: e.target.value}
	});
	
	closeRecipeModal = () => this.setState({ showRecipeModal: false, record: {} });
	openRecipeModal = () => this.setState({ showRecipeModal: true });
	
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
	
	redirectToSignUp = () => {
		this.closeModalSignIn();
		this.props.redirect('/signup');
	};
	
	render() {
		const { signIn, redirect, user, logOut } = this.props;
		
		return (
			<div className="main">
				<div className="header">
					<div>
						<a href="/">
							<Glyphicon
								glyph="cutlery"
								style={{ margin: '10px' }}
							/>
							Cookbook
						</a>
					</div>
					<div>
						{user && Object.keys(user).length > 0
							? <div style={{
								display: 'flex',
								flexDirection: 'row'
							}}>
								<div style={{
									padding: '5px'
								}}>
									<Button bsSize="small" onClick={this.openRecipeModal}>Add new recipe</Button>
								</div>
								<div style={{
									paddingLeft: '15px'
								}}>
									<div>{user.name}</div>
									<a onClick={logOut}>Log out</a>
								</div>
							</div> : <div>
								<a onClick={this.openModalSignIn}>Sign in</a>
							</div>}
					</div>
				</div>
				{this.props.children}
				<Modal
					show={this.state.showModalSignIn}
					onHide={this.closeModalSignIn}
				>
					<Modal.Header closeButton>
						<Modal.Title>Sign in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<ControlLabel>Username</ControlLabel>
							<FormControl
								type="text"
								id="username"
								placeholder="Username"
								value={this.state.record.username || ''}
								onChange={this.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl
								id="password"
								type="password"
								placeholder="Password"
								value={this.state.record.password || ''}
								onChange={this.onChange}
							/>
						</FormGroup>
						<p style={{ textAlign: 'center' }}>or</p>
						<Button
							onClick={this.redirectToSignUp}
							style={{ width: '100%' }}
						>Sign up</Button>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModalSignIn}>Cancel</Button>
						<Button
							bsStyle="primary"
							onClick={() => signIn(this.state.record)}
						>Sign in</Button>
					</Modal.Footer>
				</Modal>
				
				<RecipeModal
					record={this.state.record}
					show={this.state.showRecipeModal}
					close={this.closeRecipeModal}
					onChange={this.onChange}
					addTag={this.addTag}
					deleteTag={this.deleteTag}
					postRecipe={this.postRecipe}
					addIngredient={this.addIngredient}
					deleteIngredient={this.deleteIngredient}
				/>
			</div>
		);
	}
}

export default App;
