import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
		this.sendDelete = this.sendDelete.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

	sendDelete (event) {
		this.props.dispatch(actions.deleteUser());
	}

	render() {
		const stateUsers = this.props.store.usersReducer.usersList;
		const stateEntries = this.props.store.entriesReducer.entriesList;
		let users, entries;

		!stateUsers ?
		users = '' :
		users = stateUsers.users.map((user, idx) => {
			return <li key={idx}>{user.username}</li>
		})

		!stateEntries ?
		entries = '' :
		entries = stateEntries.entries.map((entry, idx) => {
			return <li key={idx}>{entry.entry}</li>
		})

		return (
			<div>
				<ul>
					{users}
				</ul>
				<ul>
					{entries}
				</ul>
				<button onClick={this.sendDelete} />
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	store: state
})

export default connect(mapStateToProps)(WelcomePage);
