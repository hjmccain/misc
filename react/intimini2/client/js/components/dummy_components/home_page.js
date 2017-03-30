import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import EntriesHeader from './entries_header';
import UserEntries from './user_entries';


export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<EntriesHeader />
				<UserEntries entries={this.state.userslist[1].entries}/>
			</div>
		)
	}
}

// const mapStateToProps = (state, props) => ({
// 	store: state
// })
//
// export default connect(mapStateToProps)(HomePage);
