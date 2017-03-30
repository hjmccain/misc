
require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import WelcomePage from './components/welcome-page';

const routes = (
	<Route path="/" component={WelcomePage} />
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		routes,
		document.getElementById('app'));
});
