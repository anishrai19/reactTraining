import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        /* 
          Ensures all the key value pairs in the props.input 
          object are added as props to input 
        */
        {...props.input}
      />
    </div>
  );
});

export default Input;
