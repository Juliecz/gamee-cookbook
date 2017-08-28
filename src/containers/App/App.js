import React, {Component} from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';
import RecipeModal from '../../components/RecipeModal/RecipeModal';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRecipeModal: false,
			record: {}
		};
	}
	
	componentDidMount() {
		this.props.authenticate();
	}
	
	closeModalSignIn = () =>
		this.props.formsObjectUpdate('signin', { show: false, name: '', email: '', password: '' });
	
	openModalSignIn = () => this.props.setSigninForm('show', true);
	
	onChange = (e) => this.props.setSigninForm(e.target.id, e.target.value);
	
	onChangeState = (e) => this.setState({ record: {...this.state.record, [e.target.id]: e.target.value} });
	
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
		const { signIn, redirect, user, logOut, signin } = this.props;
		
		return (
			<div className="main">
				<div className="header">
					<div className="header__title">
						<a href="/">
							<Glyphicon
								glyph="cutlery"
								style={{ margin: '10px' }}
							/>
							Cookbook
						</a>
					</div>
					<div className="header__user">
						{user && Object.keys(user).length > 0
							? <div className="header__user-auth">
								<div style={{
									padding: '5px'
								}}>
									<Button
										bsSize="small"
										onClick={this.openRecipeModal}
									>Add new recipe</Button>
								</div>
								<div style={{
									paddingLeft: '15px'
								}}>
									<div>{user.name}</div>
									<a onClick={logOut}>Log out</a>
								</div>
							</div>
							: <div>
								<a onClick={this.openModalSignIn}>Sign in</a>
							</div>}
					</div>
				</div>
				{this.props.children}
				<Modal
					show={signin.show}
					onHide={this.closeModalSignIn}
				>
					<Modal.Header closeButton>
						<Modal.Title>Sign in</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl
								type="email"
								id="email"
								placeholder="Email"
								value={signin.email || ''}
								onChange={this.onChange}
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl
								id="password"
								type="password"
								placeholder="Password"
								value={signin.password || ''}
								onChange={this.onChange}
							/>
						</FormGroup>
						<p style={{ textAlign: 'center' }}>
							or
							<a
								onClick={this.redirectToSignUp}
							> Sign up </a>
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModalSignIn}>Cancel</Button>
						<Button
							bsStyle="primary"
							onClick={() =>
								signIn({ email: signin.email, password: signin.password })}
						>Sign in</Button>
					</Modal.Footer>
				</Modal>
				
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
				
				<Alert stack={{ limit: 5 }}/>
			</div>
		);
	}
}

export default App;
