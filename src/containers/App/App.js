import React, {Component} from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="main">
				<div className="header">
					<div>
						<a href="/">Cookbook online</a>
					</div>
					<div>Sign in</div>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default App;
