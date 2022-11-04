import React, { useState } from 'react'
import Button from '../button/Button';
import "./counterSection.css"
import Styles from "../button/Button.module.css"


 const CounterSection = (props) => {

    const [state,setState]=useState(0);
    const [color,setColor]=useState(false);
    const [border,setBorder]=useState(false);

    const counterPlus=()=>{
        setState(state+1);
        setColor(!color);
        setBorder(!border);
    }

    const counterMinus=()=>{
        setState(state-1)
    }

    props.CounterData(state);
  return (
    <div className='main_container'>
    <div className='container'>
        <div className='plusCounter'>
            <Button onClick={counterPlus}
            changeColor={color}
            changeBorder={border}
            >+</Button>
        </div>

        <div className='displaySection'>
          {state}
        </div>

        <div className='minusCounter'>
          <Button onClick={counterMinus} >-</Button>
          <button className={Styles.error}>Error Button</button>
        </div>

       
    </div>
    </div>
  )
}

export default CounterSection