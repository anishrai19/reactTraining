import React from 'react'
// import Fooditem from '../Fooditem/Fooditem'
import './Card.module.css'

const Card = (props) => {
 
  const classes='card '+[props.className];
  return (

  <div className={classes}>{props.children}</div>
  )
}

export default Card