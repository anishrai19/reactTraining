import React from "react";
import "./App.css";
import {incNumber} from "./actions/index";
import {decNumber} from "./actions/index";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <button class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></button>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <button class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></button>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App;