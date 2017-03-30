import React from 'react';
import {Link} from 'react-router';

export default function SidebarLink (props) {
	const mailbox = props.name.toUpperCase();
	return (
		<Link to={'/' + props.name}>
			<p>{mailbox}</p>
		</Link>
	);
}
