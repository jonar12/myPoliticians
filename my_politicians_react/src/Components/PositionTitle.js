import React, { Component } from 'react';
// import './Navbar.css';

class PositionTitle extends Component {
	render() {
		return (
			<div>
				<h2 className="title-position">My {this.props.title}</h2>
			</div>
		);
	}
}

export default PositionTitle;
