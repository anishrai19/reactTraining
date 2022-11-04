import React, { useState } from 'react'
import Button from '../button/Button';
import './Form.css'
const Form = (props) => {
    const [Item,setItem]=useState({
        to_do_item:''
    });

    const [enteredValue, setEnteredValue] = useState('');

    const [isValid, setIsValid] = useState(false);

  

  const  handleChange=(event)=>{

        const name=event.target.name;
        const value=event.target.value;
        setItem(values=>({...values,[name]:value}))

//check length of input value and set true
        if(event.target.value.trim().length > 0) {
          setIsValid(true)
        }
        setEnteredValue(event.target.value);

    }

const submithandler = (event) => 
  {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return alert("please enter any value");
    }

    // if(Item.to_do_item===""){
    //   return
    // }

    event.preventDefault()
    const InputData={
      title : Item.to_do_item,
    }

    props.onSaveInputData(InputData)
    //  props

   setItem({
     to_do_item:''
   })
 }

  return (
    <div>
        <div className="login-box">
         <h2 
          // style={{color: !isValid ? "red" : "black"}}
          >Add Course Goal</h2>
        <form onSubmit={submithandler}>
        <div className="user-box">
            <div className={`form-control ${!isValid ? "invalid" : ""}`}>
            <input  name='to_do_item' id='input' type="text" placeholder='Enter the course goal' value={Item.to_do_item}  onChange={handleChange} 
            //  style={{background: !isValid ? "red" : "transparent"}}
            />
            <label >Enter your goal</label>
            </div>
         </div>
        
         <div className='button'>
         <Button type='submit'>Submit</Button>
         {/* <input type="submit" id="btn"/> */}
         </div>
           
        </form>
        </div>
    </div>
  )
}

export default Form