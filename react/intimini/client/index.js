require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './js/components/welcome_page';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<WelcomePage />,
		document.getElementById('root')
	);
});
