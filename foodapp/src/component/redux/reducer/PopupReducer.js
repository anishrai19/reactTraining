import {SHOW_POPUP} from "../action/action"


const initialState = {
    display : false
}

const ShowPopUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_POPUP:
        return {
          ...state,
          display : !state.display,
        };
      default:
        return state;
    }
  };

  export default ShowPopUpReducer;