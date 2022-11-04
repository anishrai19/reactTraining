import React from 'react'
import "./CounterDisplay.css"
const CounterDisplay = (props) => {
    const mul=12;
    const result=mul*props.sendCounterData;

  return (
    <div className='main_container1'>
        <div className='section'><span className='cont'>{props.sendCounterData}</span> * <span className='cont'>{mul}</span>= <span className='cont'>{result}</span></div>
    </div>
  )
}

export default CounterDisplay