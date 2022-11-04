import { combineReducers } from 'redux';
import FoodReducer from './reducer';
import ShowPopUpReducer from './PopupReducer'
const rootReducer = combineReducers({
    FoodReducer,
    ShowPopUpReducer
})

export default rootReducer