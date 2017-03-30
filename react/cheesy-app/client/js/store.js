import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {stateReducer} from './reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(stateReducer, composeEnhancers(
  applyMiddleware(thunk)
));
