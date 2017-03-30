import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import WelcomePage from './components/dummy_components/welcome_page';
import IntiminiContainer from './components/intimini_container';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<IntiminiContainer />
		</Provider>,
		document.getElementById('root')
	);
});

console.log(`Client running in ${process.env.NODE_ENV} mode`);
