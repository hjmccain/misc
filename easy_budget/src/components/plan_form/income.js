import React from 'react';

function Income(props) {

	return (
		<div>
			<h6>{"How do you make your money? List your sources of income here. If your income varies from week to week, enter a range."}</h6>
			<button>{"+"}</button>
			<div>
				<p>Source</p><input />
				<p>Amount</p><input />
				<select>
					<option value="frequency">Frequency</option>
					<option value="weekly">Weekly</option>
					<option value="monthly">Monthly</option>
					<option value="yearly">Yearly</option>
				</select>
			</div>
			<ul>
				<li><h6>Joanna's</h6><p>3400 / month</p></li>
				<li><h6>Airbnb rental</h6><p>3600 / year</p></li>
				<li><h6>Freelancing</h6><p>1200 - 1500 / month</p></li>
			</ul>
		</div>
	)
}

export default Income;
