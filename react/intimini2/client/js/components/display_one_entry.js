import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class DisplayOneEntry extends React.Component {
	constructor (props) {
		super(props);
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.props.dispatch(actions.updateEntry(
			this.props.entry.id,
			this.props.entry.mood,
			this.props.entry.selected,
			this.textInput.value));
		this.props.dispatch(actions.selectMood('all'));
		this.props.dispatch(actions.getEntries());
	}

	render () {
		console.log('props', this.props);
		const entry = this.props.entry;
		return (
			<form
			className="textarea"
			onSubmit={this.sendAddData}
			>
					<div></div>


				<ul>
					<li><textarea
						className="textinput"
						rows="10"
						cols="100"
						ref={input => this.textInput = input}
						defaultValue={entry.entry} />
					</li>
					<button className="pure-button" type="submit">Save Edit</button>
					&nbsp;
					<button
						className="pure-button delete-button"
						onClick={this.props.deleteEntry.bind(null, entry.id)}
						>
						Delete
					</button>
				</ul>
			</form>
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(DisplayOneEntry);
