import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


class WelcomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(actions.getUser());
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<h2>OH HAI: {this.props.user[2]} </h2>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	message: state.message
})

export default connect(mapStateToProps)(WelcomePage);
