import React from 'react';

function Income(props) {
	let textInput;

	function showInput() {
		console.log('toggle class')
	}

	return (
		<div>
			<h6>{"How do you make your money? List your sources of income here. If your income varies from week to week, enter a range."}</h6>
			<button onClick={showInput}>{"+"}</button>
			<div className="hide">
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
				{"income sources"}
			</ul>
		</div>
	)
}

export default Income;
