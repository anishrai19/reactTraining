// import { INCREMENTCAKE } from "../common/common";
// import { DECREMENTCAKE } from "../common/common";
// import { INCREMENTICECREAM } from "../common/common";
// import { DECREMENTICECREAM } from "../common/common";
import { variable } from "../common/common";
const initialState={
     initialStateOfCake:10,
     initialStateOfIcecream:20
}


const changeTheNumberOFCake = (state = initialState, action) => {
    if(state<1){
         alert("Your Cart is empty")
         state=0;
     }

    switch (action.type) {
        case variable.INCREMENTCAKE: return {
            ...state,
            initialStateOfCake: state.initialStateOfCake + 1
          }
        case variable.DECREMENTCAKE: return {
            ...state,
            initialStateOfCake: state.initialStateOfCake - 1
          }

          case variable.INCREMENTICECREAM: return {
            ...state,
            initialStateOfIcecream: state.initialStateOfIcecream + 1
          }
        case variable.DECREMENTICECREAM: return {
            ...state,
            initialStateOfIcecream: state.initialStateOfIcecream - 1
          }
        default: return state;
    }

    
}

// const changeTheNumberOFIceCream = (state = initialStateOfIcecream, action) => {
//     if(state<1){
//          alert("Your Cart is empty")
//          state=0;
//      }

//     switch (action.type) {
//         case "INCREMENT": return state + 1
//         case "DECREMENT": return state - 1;
//         default: return state;
//     }

// }

export default changeTheNumberOFCake;