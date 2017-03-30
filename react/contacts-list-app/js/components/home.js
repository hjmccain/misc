import React from 'react';
import {Link} from 'react-router';

export default function Home () {
	return (
		<div>
			<h3>Home Page</h3>
			<hr />
			<h4>
				<Link to={'/contacts'}>
					Your Contacts
				</Link>
			</h4>
		</div>
	);
}
