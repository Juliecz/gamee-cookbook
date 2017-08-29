import React, {Component} from 'react';
import { Button, Modal, FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.authenticate();
	}
	
	closeModalSignIn = () =>
		this.props.formsObjectUpdate('signin', { show: false, name: '', email: '', password: '' });
	
	openModalSignIn = () => this.props.setSigninForm('show', true);
	
	onChange = (e) => this.props.setSigninForm(e.target.id, e.target.value);
	
	redirectToSignUp = () => {
		this.closeModalSignIn();
		this.props.redirect('/signup');
	};
	
	render() {
		const { signIn, user, logOut, signin } = this.props;
		
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
					<form onSubmit={(event) => {
						event.preventDefault();
						signIn({ email: signin.email, password: signin.password });
					}}>
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
									required
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
									required
								/>
							</FormGroup>
							<p style={{ textAlign: 'center' }}>
								or
								<a
									onClick={this.redirectToSignUp}
									style={{
										textDecoration: 'none',
										cursor: 'pointer'
									}}
								> Sign up </a>
							</p>
						</Modal.Body>
						<Modal.Footer>
							<Button
								type="button"
								onClick={this.closeModalSignIn}
							>Cancel</Button>
							<Button
								type="submit"
								bsStyle="primary"
							>Sign in</Button>
						</Modal.Footer>
					</form>
				</Modal>
				
				<Alert stack={{ limit: 5 }}/>
			</div>
		);
	}
}

export default App;
