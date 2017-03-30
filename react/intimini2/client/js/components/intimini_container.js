import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import EntriesHeader from './entries_header';
import NewEntry from './new_entry';
import DisplayEntries from './display_entries';
import DisplayOneEntry from './display_one_entry';
import Welcome from './welcome';
import ErrorDisplay from './error_display';

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.selectEntry = this.selectEntry.bind(this);
		this.postNewEntry = this.postNewEntry.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
		this.updateEntry = this.updateEntry.bind(this);
		this.showNewEntry = this.showNewEntry.bind(this);
	}

	componentDidMount () {
		this.props.dispatch(actions.getUser());
		this.props.dispatch(actions.getEntries());
	}

// USERS

	anyoneHome (users) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].loggedIn) {
				return users[i];
			}
		}
		return false;
	}

// ENTRIES
	showNewEntry() {
		this.props.dispatch(actions.showNewEntry());
	}

	selectEntry (id, mood, selected, entry) {
		this.showNewEntry();
		this.props.dispatch(actions.selectEntry(id));
	}

	postNewEntry (text, mood) {
		this.props.dispatch(actions.postNewEntry(text, mood));
	}

	deleteEntry (id) {
		this.props.dispatch(actions.deleteEntry(id));
	}

	updateEntry (id, mood, selected, entry) {
		this.props.dispatch(actions.updateEntry(id, mood, selected, entry));
	}

	render () {

		const stateUsers = this.props.store.usersReducer.usersList;
		const stateEntries = this.props.store.entriesReducer.entriesList;
		const selectedId = this.props.store.selectedEntryReducer.selectedEntryId;
		const selectedMood = this.props.store.selectedEntryReducer.selectedMood;
		let users, entries = [], filteredEntry, filteredByMood;

		!stateUsers ?
		users = '' :
		users = stateUsers.map((user, idx) => {
			return user;
		})

		if (!stateEntries) {
			entries = '';
		} else {
			if ((selectedMood === 'all') || (!selectedMood))
				entries = stateEntries.entries.map((entry, idx) => {
					return entry;
				});
			else {
				entries = stateEntries.entries.filter((entry) => {
					return (entry.mood === selectedMood);
				});
			}
			filteredEntry = stateEntries.entries.find((entry) => {
				return (entry.id === selectedId);
			});
		}

	if (this.anyoneHome(users)) {
		var isLoggedIn = this.anyoneHome(users);
		if (!filteredEntry) {
			return (
				<div>
					<EntriesHeader user={isLoggedIn} />
					<NewEntry postNewEntry={this.postNewEntry} />
					<DisplayEntries
						user={isLoggedIn}
						entries={entries}
						toggleShow={this.toggleShow}
						selectEntry={this.selectEntry}
					/>
						<div className="home">
							<a href="#Top">
								<img
								src="../assets/home.png"
								height="21"
								width="21"
								/>
								</a>
							<a href="https://www.facebook.com/">
								<img
								src="../assets/fb.png"
								height="19"
								width="19"
								/>
							</a>
							<a href="https://www.gmail.com">
								<img
								src="../assets/email.png"
								height="19"
								width="19"
								/>
							</a>
						</div>
				</div>
			)
		} else {
			return (
				<div>
					<EntriesHeader user={isLoggedIn} />
					<DisplayOneEntry
						user={isLoggedIn}
						entry={filteredEntry}
						toggleShow={this.toggleShow}
						selectEntry={this.selectEntry}
						deleteEntry={this.deleteEntry}
					/>
					<div className="home">
						<a href="#Top">
							<img
							src="../assets/home.png"
							height="21"
							width="21"
							/>
							</a>
						<a href="https://www.facebook.com/">
							<img
							src="../assets/fb.png"
							height="19"
							width="19"
							/>
						</a>
						<a href="https://www.gmail.com">
							<img
							src="../assets/email.png"
							height="19"
							width="19"
							/>
						</a>
					</div>
				</div>
			)
		}
	} else if (users.length > 0 && entries.length > 0) {
			return (
				<Welcome />
			)
	} else {
			return (
				<ErrorDisplay />
			)
		}
	}
}

const mapStateToProps = (state, props) => ({
	store: state
});

export default connect(mapStateToProps)(LoginContainer);
