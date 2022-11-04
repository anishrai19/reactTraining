// import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./Actiontype"
// import axios from 'axios';

// const url="https://jsonplaceholder.typicode.com/users";
// export const fetchUsersRequest = () => {
//     return {
//       type:FETCH_USERS_REQUEST
//     }
//   }
  
//   export const fetchUsersSuccess = users => {
//     return {
//       type: FETCH_USERS_SUCCESS,
//       payload: users
//     }
//   }
  
//   export const fetchUsersFailure = error => {
//     return {
//       type: FETCH_USERS_FAILURE,
//       payload: error
//     }
//   }

//  export const fetchUsers = () => {
//     return function (dispatch) {
//       dispatch(fetchUsersRequest())
//       axios.get(url)
//         .then(response => {
//           const users = response.data.map(user => user.username)
//           //const users = response.data.map(user => user.title)
//           dispatch(fetchUsersSuccess(users))
//         })
//         .catch(error => {
//           // error.message is the error message
//           dispatch(fetchUsersFailure(error.message))
//         })
//     }
//   }


import { Fetch_Data } from "../../common/common"
import axios from "axios"

export const FETCHDATA = () => {
        return function (dispatch){
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                // const users = response.data.map(item=> item.id )
                console.log("user" , response)

                dispatch({
                    type:Fetch_Data,
                    payload:response.data
                })
            })
        }
}