require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as actions from './actions/index'

import store from './store'

import Game from './components/game'

// console.log(store);

//learn about this
// subscribe is a method that listens for changes on the store
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// })

//
	store.dispatch(actions.newGame());
// 	store.dispatch(actions.addGuess(95))
// 	store.dispatch(actions.addGuess(85))
// 	store.dispatch(actions.addGuess(75))
// 	store.dispatch(actions.addGuess(65))
// 	store.dispatch(actions.addGuess(55))
// 	store.dispatch(actions.addGuess(45))
// 	store.dispatch(actions.addGuess(35))
// 	store.dispatch(actions.addGuess(25))
// 	store.dispatch(actions.addGuess(15))
// 	store.dispatch(actions.addGuess(5))
// 	store.dispatch(actions.newGame())
//
//
// unsubscribe();

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('app')
  )
);
