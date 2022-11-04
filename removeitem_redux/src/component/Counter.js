import React from 'react'
import {decrementCake} from "../actions/actions";
import { incrementCake } from '../actions/actions';

import { useSelector, useDispatch } from "react-redux";
import './Counter.css'

const Counter = () => {
  const changeTheNumberOFCake = useSelector(state => state.changeTheNumberOFCake.initialStateOfCake);

  const dispatch = useDispatch();
  return (
    <>
        <div className="main-div">
      <div className="container">
      <h1> Cake Counter </h1>
      <div className='img1'></div>
      <div className="quantity">
        <button className="quantity__minus" title="Decrement" onClick={() => dispatch(decrementCake())}>Remove from Counter</button>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumberOFCake} />
        <button className="quantity__minus" title="Decrement" onClick={() => dispatch(incrementCake())}>Add to Counter</button>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default Counter