// import { reducer } from "./Reducer";
// import { combineReducers } from "redux";
// const reducers = combineReducers(
//     {
//     //   myNumber:changeTheNumber
        
//         reducer
//     }
// );

// export default reducers;

import {combineReducers} from "redux"
import { FetchReducer } from "./FetchReducer"

export const rootReducer = combineReducers({
    FetchReducer
})