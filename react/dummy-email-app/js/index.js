require('babel-polyfill');
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import Mailbox from './components/mailbox';
import MailboxContainer from './components/mailbox-container';
import EmailDisplay from './components/email-display';
import Sidebar from './components/sidebar';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Sidebar}>
			<Route path="/:mailbox" component={MailboxContainer}> {/* add Container element */}
				<IndexRoute component={Mailbox} />
				<Route path="/:emailUrl" component={EmailDisplay} />
			</Route>
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		routes,
		document.getElementById('app')
	);
});
