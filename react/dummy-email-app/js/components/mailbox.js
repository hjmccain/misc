import React from 'react';
import {Link} from 'react-router';
import EMAILS from '../emails-object';

export default function Mailbox (props) {
	const mailboxId = EMAILS[props.params.mailbox];
	var emailDisplay = Object.keys(mailboxId).map((key) => {
		const emails = mailboxId[key];
		const emailUrl = (`/${props.params.mailbox}/${emails.id}`);
		return (
			<p key={emails.id}>
				<strong>
					<Link to={emailUrl}>
						{emails.title}
					</Link>
				</strong>
				&nbsp;
				from
				&nbsp;
				<strong>{emails.from}</strong>
			</p>
		);
	});

	return (
		<div>
			<hr />
			{emailDisplay}
		</div>
	);
}
