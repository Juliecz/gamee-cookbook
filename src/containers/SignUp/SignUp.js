import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './SignUp.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			record: {}
		};
	}
	
	onChange = (e) =>
		this.setState({ record: {...this.state.record, [e.target.id]: e.target.value} });
	
	render() {
		const { signUp } = this.props;
		
		return (<div className="signup">
			<h3>Sign up</h3>
			<form onSubmit={(event) => {
				event.preventDefault();
				signUp(this.state.record);
			}}>
				<FormGroup>
					<ControlLabel>Name</ControlLabel>
					<FormControl
						type="text"
						id="name"
						placeholder="Name"
						value={this.state.record.name || ''}
						onChange={this.onChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Email</ControlLabel>
					<FormControl
						type="email"
						id="email"
						placeholder="Email"
						value={this.state.record.email || ''}
						onChange={this.onChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Password</ControlLabel>
					<FormControl
						type="password"
						id="password"
						placeholder="Password"
						value={this.state.record.password || ''}
						onChange={this.onChange}
						required
					/>
				</FormGroup>
				<ControlLabel/>
				<Button
					type="submit"
					bsStyle="primary"
				>Sign up</Button>
			</form>
		</div>);
	}
}

export default SignUp;