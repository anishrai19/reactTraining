import React from 'react'
import { incrementIcecream } from '../actions/actions';
import { decrementIcecream } from '../actions/actions';
import { useSelector, useDispatch } from "react-redux";
import './IcecreamCounter.css'


const IcecreamCounter = () => {
    const changeTheNumberOFIceCream = useSelector(state => state.changeTheNumberOFIceCream.initialStateOfIcecream);

    const dispatch = useDispatch();
    return (
      <>
        <div className="main-div">
        <div class="container">
        <h1> IcecreamCounter Counter </h1>
        <div className='img2'>

        </div>
        <div class="quantity">
          <button class="quantity__minus" title="Decrement" onClick={() => dispatch(decrementIcecream())}>Remove from Counter</button>
          <input name="quantity" type="text" class="quantity__input" value={changeTheNumberOFIceCream} />
          <button class="quantity__minus" title="Decrement" onClick={() => dispatch(incrementIcecream())}>Add to Counter</button>
        </div>
            </div>
          </div>
      </>
    )
}

export default IcecreamCounter