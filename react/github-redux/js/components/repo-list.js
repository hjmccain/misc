import React from 'react';
import Repository from './repo';
import {connect} from 'react-redux';

import * as actions from '../actions/index-actions';

export class RepositoryList extends React.Component {
	constructor (props) {
		super(props);
		this.addRepository = this.addRepository.bind(this);
	}

	addRepository () {
		const repositoryName = this.repositoryNameInput.value;
		this.props.dispatch(actions.addRepo(repositoryName));
	}

	render() {
		let key = 0;
		const repositories = this.props.repositories.map(repository => {
			return (
				<Repository
					repository={repository}
					key={key++}
				/>
			)
		});

		return (
			<div className="repository-list">
				{repositories}
				{/*TODO: discuss with Nic*/}
				<input type="text" ref={ref => this.repositoryNameInput = ref} />
				<button type="button" onClick={this.addRepository}>
					Add Repository
				</button>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	repositories: state
});
export default connect(mapStateToProps)(RepositoryList);
