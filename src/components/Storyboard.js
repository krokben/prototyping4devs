import React, { Component } from 'react';

export default class Storyboard extends Component {
	render() {
		const style = {
			background: '#fff',
			borderRadius: '2px',
			display: 'inline-block',
			width: this.props.storyboard.width + 'px',
			height: this.props.storyboard.height + 'px',
			boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
		};

		return (
			<div style={style}>
			</div>
		);
	}
}