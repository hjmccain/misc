import React from 'react';

export default function UserEntries(props) {
	console.log(props);
	const entries = props.entries.map((entry, idx) => {
		var mood = <p>{entry.mood}</p>
		var date = <p>{entry.date}</p>
		var text = <p>{entry.content}</p>
		return (
			<div className="entry" key={idx}>
				<ul>
					<li>{mood}</li>
					<li>{date}</li>
					<li>{text}</li>
				</ul>
			</div>
		)
	})


	console.log(props);
	return (
		<div>{entries}</div>
	)
}
