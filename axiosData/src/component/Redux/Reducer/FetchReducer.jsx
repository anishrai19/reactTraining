import { Fetch_Data } from "../../common/Common"

const initialState = {
    users : []
}

export const FetchReducer = (state=initialState , action) => {
    switch(action.type){
        case Fetch_Data :
            return {
                users : action.payload
            } 
        default :
            return state;
    }
}