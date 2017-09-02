import React, { Component } from 'react';

export default class Toolbar extends Component {
	resizeStoryboard = (e) => {
		e.preventDefault();
		this.props.resizeStoryboard({
			width: this.storyboardWidth.value,
			height: this.storyboardHeight.value
		})
	}

	render() {
		const style = {
			backgroundColor: '#333',
			color: '#fff',
			flex: 1
		};

		return (
			<div style={style}>
				<form onSubmit={this.resizeStoryboard}>
					<input type="number" defaultValue={this.props.storyboard.width} ref={x => this.storyboardWidth = x} />
					<input type="number" defaultValue={this.props.storyboard.height} ref={x => this.storyboardHeight = x} />
					<input type="submit" defaultValue="Submit" />
				</form>
			</div>
		);
	}
}