import React from 'react';

function Bills(props) {
	return (
		<div>
			<h6>{"What sorts of recurring payments do you have on a weekly, monthly, or yearly basis?"}</h6>
			<button>{"+"}</button>
			<div>
				<p>Expense</p><input />
				<p>Amount</p><input />
				<select>
					<option value="frequency">Frequency</option>
					<option value="weekly">Weekly</option>
					<option value="monthly">Monthly</option>
					<option value="yearly">Yearly</option>
				</select>
			</div>
			<ul>
				<li><h6>Car payment</h6><p>250 / month</p></li>
				<li><h6>Car insurance</h6><p>900 / year</p></li>
				<li><h6>Health insurance</h6><p>196 / month</p></li>
				<li><h6>Rent</h6><p>950 / month</p></li>
				<li><h6>Electricity bill</h6><p>45 / month</p></li>
				<li><h6>Studio space rent</h6><p>400 / month</p></li>
				<li><h6>Paying back Danesh for Chicago trip</h6><p>10 / week</p></li>
			</ul>
		</div>
	)
}

export default Bills;
