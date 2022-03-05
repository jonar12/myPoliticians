import './PoliticianCard.css';
import React, { Component } from 'react';

class PoliticianCard extends Component {
	render() {
		return (
			<div className="PoliticianCard">
				<img className="PoliticianCard-pic" alt="politician-picture" />
				<div className="container">
					<h3 className="name">{this.props.name}</h3>
					{/*Add a string displaying the congressional district */}
					<p className="party">party</p>
					<p className="phone">phone</p>
					<a href="">politician's website</a>
					<a href="">politician's e-mail</a>
				</div>
			</div>
		);
	}
}

export default PoliticianCard;
