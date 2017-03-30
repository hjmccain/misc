import React from 'react';

export default function Input (props) {
	return (
		<form onSubmit={props.submitEvent}> // clear value on submit
			<input onChange={props.userInputEvent} type="text" />
			<button type="submit">Submit</button>
		</form>
  );
}
