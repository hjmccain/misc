import React from 'react';
import ReactDOM from 'react-dom';

import Input from './input';
// import ResultsDisplay from './results-display';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			input: '',
			placeholder: ''
		};
		this.userInputEvent = this.userInputEvent.bind(this);
		this.submitEvent = this.submitEvent.bind(this);
	}

	userInputEvent (e) {
		this.setState({input: e.target.value});
		console.log('user input', e.target.value);
	}

	submitEvent (e) {
		e.preventDefault();
		console.log('submit event', this.state.input);
	}

	render () {
		return (
			<div>
				<Input
					submitEvent={this.submitEvent}
					userInputEvent={this.userInputEvent}
					results={this.state.input}
					placeholder={this.state.placeholder}
				/>
			</div>
		);
	}
}

export default App;
