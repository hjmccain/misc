import React from 'react';
import ReactDOM from 'react-dom';

// Change to refs implementation
const Input = (props) => {
	return (
		<form onSubmit={props.update}>
			<input type="text" onChange={props.change} />
			<button type="submit">Search</button>
		</form>
	);
};

export default Input;
