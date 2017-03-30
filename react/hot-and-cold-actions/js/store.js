import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {gameReducer} from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(gameReducer, composeEnhancers(
  applyMiddleware(thunk)
));
