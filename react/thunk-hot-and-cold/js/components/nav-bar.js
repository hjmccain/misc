import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class NavBar extends React.Component {
//build buttons
  constructor(props){
    super(props);
    this.newGame = this.newGame.bind(this);
  }
  newGame(event){
    event.preventDefault();
    this.props.dispatch(actions.fetchFewestGuesses());
    // this.props.dispatch(actions.newGame());
  }
  render() {
    return(
      <nav>
        <ul>
        <li>WHAT?</li>
        <a href="" onClick={this.newGame}><li>+ NEW GAME</li></a>
        </ul>
      </nav>
    )
  }
}

export default connect()(NavBar);
