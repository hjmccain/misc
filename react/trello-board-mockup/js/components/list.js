import React from 'react';
import Card from './card.js';

export default function List (props) {
	const cardsArr = props.cards.map((cardElem, index) => {
		const listItem = <li>{cardElem}</li>;
		return <Card
			onDeleteContent={props.onDeleteContent}
			onTaskComplete={props.onTaskComplete}
			text={listItem}
			key={index}
			id={index}
		/>;
	});

	return (
		<div>{cardsArr}</div>
	);
}
