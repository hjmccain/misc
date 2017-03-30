require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/home';
import App from './components/app';
import ContactContainer from './components/contact-container';
import ContactListContainer from './components/contact-list-container';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/contacts" component={App}>
			<IndexRoute component={ContactListContainer} />
			<Route path=":contactId" component={ContactContainer} />
		</Route>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		routes,
		document.getElementById('app')
	);
});
