import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Cheese from './cheese';

export class CheeseList extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.fetchCheeses());
	}

	sendAddData (event) {
		event.preventDefault();
		this.props.dispatch(actions.addCheese(this.userInput.value));
		this.userInput.value = '';
	}

	render () {
		const cheeseList = this.props.store.cheeses.map(
			(cheese, index) => <Cheese name={cheese} key={index} />
	);

		return (
			<div>
				<ul>
					{cheeseList}
				</ul>
				<form onSubmit={this.sendAddData}>
						<input type="text" ref={input => this.userInput = input} />
						&nbsp;
						<button>Add cheese</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(CheeseList);
