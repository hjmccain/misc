import React from 'react';
import Home from './home';
import Plan from './plan';
import Budget from './budget';

class Routes extends React.Component {
	constructor() {
		super();

		this.state = {
			homeClicked: false,
			planClicked: true,
			budgetClicked: false
		};
		this.onHomeClick = this.onHomeClick.bind(this);
		this.onPlanClick = this.onPlanClick.bind(this);
		this.onBudgetClick = this.onBudgetClick.bind(this);
	}

	onHomeClick() {
		this.setState({
			homeClicked: true,
			planClicked: false,
			budgetClicked: false
		});
	}

	onPlanClick() {
		this.setState({
			homeClicked: false,
			planClicked: true,
			budgetClicked: false
		});
	}

	onBudgetClick() {
		this.setState({
			homeClicked: false,
			planClicked: false,
			budgetClicked: true
		});
	}

	render() {
		if (this.state.homeClicked) {
			return <Home />
		} else if (this.state.planClicked) {
			return <Plan />
		} else if (this.state.budgetClicked) {
			return <Budget />
		}
	}
}

export default Routes;
