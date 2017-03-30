import React from 'react';

export default function Card (props) {
	// how to target specific state element when delete
	// button is clicked?
	var newCard = (
		<form>
			<p>{props.text}</p>

			<button
				id={props.id}
				onClick={props.onDeleteContent}
				className="delete-content"
				type="button">
					Delete task
			</button>

			<button
				id={props.id}
				onClick={props.onTaskComplete}
				className="completed-task"
				type="button">
					Mark as finished
			</button>
		</form>
	);

	return (
		<div>{newCard}</div>
  );
}
