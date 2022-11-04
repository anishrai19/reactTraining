import {BUY_FOOD , Buy_SuShi , Buy_Schnitzel , Buy_Barbecue_Burger , Buy_Green_Bowl ,SHOW_POPUP} from './action'

export const BuyBurger = () => {
  return {
      type : Buy_Barbecue_Burger,
  }
}
export const BuyFood =() =>{
  return{
      type:BUY_FOOD
  }
}

export const BuyBowl = () => {
  return {
      type : Buy_Green_Bowl,
  }
}

export const BuySchnitzel = () => {
  return {
      type : Buy_Schnitzel,
  }
}

export const BuySushi = () => {
  return {
      type : Buy_SuShi,
  }
}

export const ShowPopUp = () => {
  return {
      type : SHOW_POPUP
  }
}


