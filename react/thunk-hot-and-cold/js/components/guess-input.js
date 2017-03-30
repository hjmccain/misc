import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class GuessInput extends React.Component {
    constructor(props) {
      super(props);
      this.addGuess = this.addGuess.bind(this);
    }
    addGuess(event){
      event.preventDefault();
      let guess = this.guessInput.value;
      this.props.dispatch(actions.addGuess(guess));
      this.guessInput.value = "";
    }
//add alerts for guesses that are invalid
    
    render() {
      return (
        <div>
          <form className="form" onSubmit={this.addGuess}>
          <input
            type="text"
            ref={ref => this.guessInput = ref}
            className="guess-input"
            placeholder="Enter your Guess" />
          <button
            type="submit"

            id="guess-button"
            className="button">
            Guess
          </button>
        </form>
        </div>
      )
    }
}

// const mapStateToProps = (state, props) => ({
//   guessedNumbers: state.guessedNumbers
// });

export default connect()(GuessInput);
