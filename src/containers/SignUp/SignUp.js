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
			<FormGroup>
				<ControlLabel>Name</ControlLabel>
				<FormControl
					type="text"
					id="name"
					placeholder="Name"
					value={this.state.record.name || ''}
					onChange={this.onChange}
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
				/>
			</FormGroup>
			<ControlLabel/>
			<Button
				bsStyle="primary"
				onClick={() => signUp(this.state.record)}
			>Sign up</Button>
		</div>);
	}
}

export default SignUp;