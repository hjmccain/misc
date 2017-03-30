import React from 'react';

function General(props) {
	return (
		<div>
			<h6>{"What necessities do you spend money on every week? As the name implies, try to keep these relatively general — \"groceries\"\
				instead of \"organic veggies\", for instance — and don't worry about\
				pinpointing the exact amount you spend — just make your best guess, and round up a bit if you want to be safe."}</h6>
			<button>{"+"}</button>
			<div>
				<p>Expense</p><input />
				<p>Amount</p><input />
				<select>
					<option value="frequency">Frequency</option>
					<option value="daily">Daily</option>
					<option value="weekly">Weekly</option>
				</select>
			</div>
			<ul>
				<li><h6>Groceries</h6><p>150 / week</p></li>
				<li><h6>Gas</h6><p>30 / week</p></li>
				<li><h6>Laundry</h6><p>12 / week</p></li>
			</ul>
		</div>
	)
}

export default General;
