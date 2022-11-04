// import { createStore,applyMiddleware } from "redux"
// import reducer from "../Reducer/Reducer";
// import logger from "redux-logger"
// const middlewares = [logger];
// const store=createStore(reducer,applyMiddleware(...middlewares));
// export default store;

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk" 
import logger from "redux-logger"
import { rootReducer } from "../Reducer/index";

export const store = createStore(rootReducer ,applyMiddleware(thunk , logger));