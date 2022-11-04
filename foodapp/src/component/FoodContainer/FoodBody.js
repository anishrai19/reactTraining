import React from 'react'
import "./FoodBody.css"
import ItemList from './ItemList'
import Description from "../Description/Description"
// import Quotes from './Quotes/Quotes'

const FoodBody = () => {
  return (
    <div className='body_Container'>
      <Description/>
      <ItemList />
    </div>
  )
}

export default FoodBody