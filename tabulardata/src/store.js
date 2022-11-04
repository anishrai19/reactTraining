import thunk from 'redux-thunk';

import reducers from './redux/Reducer/index';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
// import store from "./store"

export const store = createStore(reducers, applyMiddleware(thunk,logger));

    
  
