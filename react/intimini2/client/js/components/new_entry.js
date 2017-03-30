import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';



class NewEntry extends React.Component {
	constructor (props) {
		super(props);
		console.log('here',props)
		this.sendAddData = this.sendAddData.bind(this);
	}

	sendAddData(e) {
		e.preventDefault();
		this.moodInput.value === 'mood' ?
		this.moodInput.value = '' :
		this.moodInput.value;

		this.props.dispatch(actions.postNewEntry(this.textInput.value, this.moodInput.value));

		this.textInput.value = '';
		this.moodInput.value = '';
		
	}

	render () {
		return (
			<div className="postcontain">
				<form
					className="textarea"
					onSubmit={this.sendAddData}>
					<ul>
						<li>
							&nbsp;
							<select className="pure-button" ref={input => this.moodInput = input}>
								<option value="mood">Mood</option>
								<option value="happy">Happy</option>
								<option value="excited">Excited</option>
								<option value="awkward">Awkward</option>
								<option value="ambivalent">Ambivalent</option>
								<option value="bored">Bored</option>
								<option value="sad">Sad</option>
								<option value="depressed">Depressed</option>
							</select>
						</li>
						<li>
							<textarea
								id="clear"
								className="textinput"
								rows="10"
								cols="100"
								ref={input => this.textInput = input}
								></textarea>
						</li>
						<button
							className="pure-button ctr"
							type="submit">
							Submit Entry
						</button>
					</ul>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	store: state
});

export default connect(mapStateToProps)(NewEntry);
