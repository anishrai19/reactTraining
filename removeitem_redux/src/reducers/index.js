import changeTheNumberOFCake from "./reducers";
import changeTheNumberOFIceCream from "./reducers"
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumberOFCake,
        changeTheNumberOFIceCream
    }
);

export default reducers;