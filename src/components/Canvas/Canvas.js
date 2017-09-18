import React, { Component } from 'react';

class Canvas extends Component {
	render() {
		return (<canvas
			ref="canvas"
			style={{
				border: '1px solid #ccc',
				borderRadius: '4px',
				backgroundColor: 'white',
				width: '100%',
				height: '300px'
			}}
		>
		
		</canvas>);
	}
}

export default Canvas;