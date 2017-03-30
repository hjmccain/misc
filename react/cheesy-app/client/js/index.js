require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import CheeseList from './components/cheese_list';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
				<CheeseList />
		</Provider>,
		document.getElementById('root')
	);
});

console.log(`Client running in ${process.env.NODE_ENV} mode`);
