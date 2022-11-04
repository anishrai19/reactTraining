import { INCREMENT } from "../actions";
import { DECREMENT } from "../actions";

const initialState = {
 number:0
}

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return{...state, number: state.number + 1 }
        case DECREMENT: return {...state, number: state.number - 1 }
        default: return state;
    }
}

export default changeTheNumber;