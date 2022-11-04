import React,{useState} from 'react'
import "./Form.css"


const Form = (props) => {

    const [Item,setItem]=useState({
        item_name:'',
        item_price:''
    });

    // const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(false);

     const  handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setItem(values=>({...values,[name]:value}))

        if(event.target.value.trim().length > 0) {
          setIsValid(true)
        }
        // setEnteredValue(event.target.value);
    }
   const handleSubmit = (event) => 
  {
    if (Item.item_name === "" || Item.item_price==="") {
      setIsValid(false);
      return alert("please enter any value");
    }

    event.preventDefault()
    const inputData={
      item_name : Item.item_name,
      item_price: Item.item_price
    }
    props.sendTableData(inputData)

   setItem({
     item_name:'',
     item_price:''
   })
 }

    // const itemInput=useRef('');
    // const itemPriceInput=useRef('');

    // const handleSubmit = (event) => 
    // {
    //   event.preventDefault();
    //   const inputData={
    //   item_name:itemInput.current.value,
    //   item_price:itemPriceInput.current.value
  
    // }
    //   props.sendTableData(inputData)
    //   console.log(inputData)
    // }
  
    return (
      <div>
        <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's Add your Expense Details!</div>
        <form onSubmit={handleSubmit}>

        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <div className="input-container ic2" >
          <input id="itemName" className="input" type="text" placeholder="" name='item_name' onChange={handleChange}  value={Item.item_name || ""} />
          <div className="cut"></div>
          <label htmlFor="itemName" className="placeholder">Item Name</label>
        </div>
        </div>

        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <div className="input-container ic2">
          <input id="amount" className="input" type="number" placeholder="" name='item_price' onChange={handleChange}  value={Item.item_price || ""} />
          <div className="cut cut-short"></div>
          <label htmlFor="amount" className="placeholder">Price of Item</label>
        </div>
        </div>
        <input type="submit" className='submit'/>
        </form>
      </div>
  
      {/* <input type="text" value={}/> */}
  
    
      {/* <ShowTableData  data={inputs}/> */}
    </div>
  )
}

export default Form