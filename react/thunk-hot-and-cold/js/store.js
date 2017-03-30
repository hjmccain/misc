import { createStore, applyMiddleware } from 'redux';
import { mainReducer } from './reducers/index';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

export default createStore(mainReducer, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
