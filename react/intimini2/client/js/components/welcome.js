import React from 'react';
import {connect } from 'react-redux';
import { toggleLogin } from '../actions/actions';

function Welcome (props) {
	console.log('these', props)
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const d = new Date();
	const date = d.getDate();
	const mn = d.getMonth();
	const dn = d.getDay();
	const month = months[mn];
	const day = days[dn];

	return (
		<div className="welcome">
			<br />
			<img src="../assets/calendar.png" height="70" width="70"/>
			<hr/>
			<br/>
			<span>
			<h1>Welcome!</h1>
				<h4> {month}&nbsp;{date} </h4>
				<button
					className="pure-button"
					onClick={props.logInUser}>Come on in!</button>
			</span>
		</div>
	)
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
	logInUser: function () {
		dispatch(toggleLogin(1));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
