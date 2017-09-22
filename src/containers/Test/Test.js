import React, { Component } from 'react';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
		
		}
	}
	
	componentDidMount() {
		console.log('componentDidMount()');
	}
	
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate()');
	}
	
	render() {
		return (<div>
			<h2>Test component</h2>
		</div>);
	}
}

export default Test;