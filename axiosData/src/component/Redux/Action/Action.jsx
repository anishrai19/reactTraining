import { Fetch_Data } from "../../common/Common"
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
