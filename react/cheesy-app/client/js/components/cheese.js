import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

export class Cheese extends React.Component {
	constructor (props) {
		super(props);
		this.sendDeleteData = this.sendDeleteData.bind(this);
	}

	sendDeleteData (event) {
		this.props.dispatch(actions.deleteCheese(this.props.name));
	}

	render () {
		return (
			<li>
				{this.props.name}
				&nbsp;
			<button type="delete" onClick={this.sendDeleteData}>
				Delete
			</button>
			</li>
		)
	}
}

const mapStateToProps = (state, props) => ({});

export default connect(mapStateToProps)(Cheese);
