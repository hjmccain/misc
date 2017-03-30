import React from 'react';
import EMAILS from '../emails-object';

export default function EmailDisplay (props) {
	var email = EMAILS[props.params.mailbox][+props.params.emailUrl];
	return (
		<div>
		<hr />
				<p><strong>Subject:</strong> {email.title}</p>
				<p><strong>From:</strong> {email.from}</p>
				<p><strong>To:</strong> {email.to}</p>
				<p><strong>Message:</strong> {email.content}</p>
		</div>
	);
}
