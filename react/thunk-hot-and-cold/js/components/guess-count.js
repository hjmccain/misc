import React from 'react';

import {connect} from 'react-redux'

export default function GuessCount(props) {

  return (
		<div>
			<p>Beat your record of # guesses!</p>
			<p>Guess #{props.stateCount}!</p>
		</div>

  )
}
