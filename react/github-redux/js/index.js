require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repo-list';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store = {store}>
			<RepositoryList />
		</Provider>,
		document.getElementById('app')
	)
});
