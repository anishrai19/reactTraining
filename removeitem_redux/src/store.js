import { createStore,applyMiddleware } from "redux";
import reducers  from "./reducers/index";
import logger from 'redux-logger'

const middleware=[logger]
const store = createStore(reducers,applyMiddleware(...middleware));

export default store;