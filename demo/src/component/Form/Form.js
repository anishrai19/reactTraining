import React,{useState,useRef} from 'react'
import Showdata from '../Showdata/Showdata';
import "./Form.css"
// import {createRef} <form>
  

const Form = () => {

  const dateInput = useRef(null);
  const itemInput=useRef(null);
  const itemPriceInput=useRef(null);
  

  const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
    
  //   setInputs(values => ({...values, [name]: value}))
  // }

  const handleSubmit = (event) => 
  {
    event.preventDefault();
   setInputs(()=>{
    const inputData={
    date:dateInput.current.value,
    item_name:itemInput.current.value,
    item_price:itemPriceInput.current.value

  }})
    
    // const { name, value } = event.current;
    // setInputs(values => ({...values, [name]: value}))
    console.log(inputData)
    // console.log(inputs);
  }

  return (
    <div>
      <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's Add your Expense Details!</div>
      <form onSubmit={handleSubmit}>
      <div className="input-container ic1">
        <input id="expense_date" className="input" type="date" name='date' placeholder=""  ref={dateInput} 
        //  onChange={handleChange}  value={inputs.date || ""}
         />
        <div className="cut"></div>
        <label htmlFor="expense_date" className="placeholder">Expense Date</label>
      </div>
      <div className="input-container ic2">
        <input id="itemName" className="input" type="text" placeholder="" name='item_name' ref={itemInput}
        //  onChange={handleChange}  value={inputs.item_name || ""} 
          />
        <div className="cut"></div>
        <label htmlFor="itemName" className="placeholder">Item Name</label>
      </div>
      <div className="input-container ic2">
        <input id="amount" className="input" type="number" placeholder="" name='item_price' ref={itemPriceInput} 
        //  onChange={handleChange}  value={inputs.item_price || ""} 
         />
        <div className="cut cut-short"></div>
        <label htmlFor="amount" className="placeholder">Price of Item</label>
      </div>
      <input type="submit" className='submit'/>
      </form>
    </div>

    {/* <input type="text" value={}/> */}

  
    <Showdata  data={inputs}/>
  </div>
  )

};


export default Form