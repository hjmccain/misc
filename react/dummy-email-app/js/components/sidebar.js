import React from 'react';
import EMAILS from '../emails-object';
import SidebarLink from './sidebar-link';

export default function Sidebar (props) {
	var mailboxes = Object.keys(EMAILS).map((mailbox, idx) => {
		return (
			<SidebarLink key={idx} name={mailbox}>
				{mailbox.toUpperCase()}
			</SidebarLink>
		);
	});

	return (
		<div>
			<h3>
				{mailboxes}
			</h3>
			<div>
				{props.children}
			</div>
		</div>
	);
}
