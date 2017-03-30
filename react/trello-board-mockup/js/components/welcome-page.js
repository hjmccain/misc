import React from 'react';
import Board from './board.js';

export default class welcomePage extends React.Component {
	constructor () {
		super();
		this.state = {
			title: [],
			boardContent: [
				{	listTitle: '',
					listContent: [
					{	text: '',
						cards: []
					}]
				}
			]
		};
		this.onCardChange = this.onCardChange.bind(this);
		this.onCardSubmit = this.onCardSubmit.bind(this);
		this.onDeleteContent = this.onDeleteContent.bind(this);
		this.onTaskComplete = this.onTaskComplete.bind(this);
		this.navToBoard = this.navToBoard.bind(this);
	}

	navToBoard (event) {
		console.log('navToBoard clicked');
		window.location = '';
	}

	onCardChange (event) {
		console.log('list-container input changed');
		this.setState({text: event.target.value});
	}

	onCardSubmit (event) {
		event.preventDefault();
		console.log('list-container add submit');
		var cardsArray = this.state.boardContent[0].listContent[0].cards;
		// mutating state...
		cardsArray.push(this.state.text);
		this.setState({
			cards: cardsArray
		});
	}

	onDeleteContent (event) {
		console.log('Delete clicked');
		console.log(event.target.id);
	}

	onTaskComplete (event) {
		console.log('Completed-task clicked');
	}

	render () {
		return (
			<div>
				<h1>Welcome to Listful</h1>
				<p>Add a new Board to get started</p>
				<form onSubmit={this.navToBoard}>
					<input type="text" />
					<button type="submit">
						Click meh
					</button>
				</form>
			</div>
		);
	}
}
