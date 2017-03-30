import React from 'react';
import Income from './plan_form/income';
import General from './plan_form/general';
import Bills from './plan_form/bills';
import Save from './plan_form/save';
import Discretionary from './plan_form/discretionary';

class Plan extends React.Component {
	constructor() {
		super();
		this.state = {
			income: {},
			general: {},
			bills: {},
			save: {},
			discretionary: 0
		}
		this.addIncomeSource = this.addIncomeSource.bind(this);
	}

	addIncomeSource() {
		const { addIncomeSource } = this;
		this.setState({
			income: Object.assign({}, this.state.income, { addIncomeSource: addIncomeSource })
		});
	}

	render() {
		return (
			<div>
				<form>
					<Income addIncomeSource={this.addIncomeSource} income={this.state.income}/>
					<General />
					<Bills />
					<Save />
					<Discretionary />
				</form>
			</div>
		)
	}
}

export default Plan;
