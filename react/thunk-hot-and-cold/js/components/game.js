import React from 'react';
import {connect} from 'react-redux';
import GuessInput from './guess-input';
import Feedback from './feedback';
import GuessCount from './guess-count';
import PrevGuesses from './prev-guesses';
import NavBar from './nav-bar';

export class Game extends React.Component {
  constructor(props){
    super(props);

  }
    render() {
      return (
        <div>
          <NavBar />
          <h1 id="title">HOT or COLD</h1>
          <Feedback stateFeedback={this.props.feedback}/>
          <GuessInput />
          <GuessCount stateCount={this.props.count}/>
          <PrevGuesses guessedNumbers={this.props.guessedNumbers}/>
        </div>
      );
    }
}

const mapStateToProps = (state, props) => ({
  count: state.count,
  feedback: state.feedback,
  guessedNumbers: state.guessedNumbers
});

export default connect(mapStateToProps)(Game)

//component with html layout
//nav bar at top with 2 elements: WHAT? (left) and +NEW GAME (right)
//title HOT or COLD
//container for the game elements
//feedback element banner
//guess input field
//guess count field
//prev guesses displayed in <ul>
