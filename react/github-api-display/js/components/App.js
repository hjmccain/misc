import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Results from './Results';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			text: '',
			user: {username: ''},
			repos: []
		};
		this.update = this.update.bind(this);
		this.change = this.change.bind(this);
	}

	update (e) {
		e.preventDefault();

		const username = this.state.text;
		const userSearch = `https://api.github.com/users/${username}`;
		const repoSearch = `https://api.github.com/users/${username}/repos`;

		var validateResponse = (response) => {
			if (!response.ok) {
				return Promise.reject(response.statusText);
			}
			return response.json();
		};

		var setUsername = (body) => {
			this.setState({user: {username: body.login}});
		}

		var fetchRepos = () => {
			return fetch(repoSearch);
		};

		var setRepos = (body) => {
			this.setState({repos: body});
			console.log(body);
		};

		fetch(userSearch)
		.then(validateResponse)
		.then(setUsername)
		.then(fetchRepos)
		.then(validateResponse)
		.then(setRepos)
		.catch(console.error);

	}

	change (e) {
		this.setState({text: e.target.value});
	}

	render () {
		return (
			<div>
			<Input update={this.update} change={this.change} />
			<Results user={this.state.user} repos={this.state.repos} />
			</div>
			);
	}
}

export default App;
