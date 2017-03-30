import React from 'react';

export default function PrevGuesses(props) {

	// have access to guessed numbers array in props. 

	let list = props.guessedNumbers.map((num, index) => {
		return (
			<li key={index}>{num}</li> 
		);
	});

	return (
		<div id="prev-guesses">
			<ul>{list}</ul>
		</div>
	)
}
