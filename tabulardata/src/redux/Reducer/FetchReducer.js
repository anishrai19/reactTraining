// import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "../Action/Actiontype"


// const initialState = {
//     loading: false,
//     users: [],
//     error: ''
//   }

// export const reducer = (state = initialState, action) => {
//     console.log(action.type)
  
//     switch (action.type) {
//       case FETCH_USERS_REQUEST:
//         return {
//           ...state,
//           loading: true
//         }
//       case FETCH_USERS_SUCCESS:
//         return {
//           loading: false,
//           users: action.payload,
//           error: ''
//         }
//       case FETCH_USERS_FAILURE:
//         return {
//           loading: false,
//           users: [],
//           error: action.payload
//         }
//     }
// }


import { Fetch_Data } from "../../common/common"

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