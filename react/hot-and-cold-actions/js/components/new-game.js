import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class NewGame extends React.Component {
	constructor (props) {
    super(props);
		this.resetGame = this.resetGame.bind(this);
  }

	resetGame (event) {
		// this.props.dispatch(actions.newGame());
		this.props.dispatch(actions.fetchBestScore());
	}

render () {
	  return (
	    <button onClick={this.resetGame}>
	      Play again!
	    </button>
	  )
	}
}

const mapStateToProps = (state, props) => ({
  game: state
});

export default connect(mapStateToProps)(NewGame);
