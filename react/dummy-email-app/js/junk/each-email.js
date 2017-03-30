import React from 'react';
import EMAILS from '../emails-object';

export default function EachEmail () {
	Object.keys(EMAILS).map((x) => {
		var eachInbox = EMAILS[x];
		console.log(x);
		Object.keys(eachInbox).map((y) => {
			const eachEmail = eachInbox[y];
			console.log(eachInbox);
			console.log(eachEmail);
		});
	});
}
