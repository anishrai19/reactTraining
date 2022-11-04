// import { INCREMENTCAKE } from "../common/common"
// import { DECREMENTCAKE } from "../common/common"
// import { DECREMENTICECREAM } from "../common/common"
// import { INCREMENTICECREAM } from "../common/common"
import { variable } from "../common/common"
export const decrementCake=()=>{
    return{
        type:variable.DECREMENTCAKE
    }
}

export const incrementCake=()=>{
    return{
        type:variable.INCREMENTCAKE
    }
}

export const decrementIcecream=()=>{
    return{
        type:variable.DECREMENTICECREAM
    }
}

export const incrementIcecream=()=>{
    return{
        type:variable.INCREMENTICECREAM
    }
}

