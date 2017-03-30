import React from 'react';

export default function App (props) {
	return (
		<div>
			<h3>
				Contacts App
			</h3>
			<div>
				{props.children}
			</div>
		</div>
	);
}
