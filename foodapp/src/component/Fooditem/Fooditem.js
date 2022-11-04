import React,{useState} from 'react'
import Button from '../UI/Button/Button'
import './Fooditem.css'
import { addToCart } from '../redux/action/actiontype'
import { connect } from 'react-redux'
const Fooditem = (props) => {
  const [foodQuantity, setFoodQuantity] = useState(1);

  const handleQuantityClick = (event) => {
    setFoodQuantity(event.target.value);
    
  };
  return (
    <div className='main-container'>
    <div className='card'>
      {
      props.data.map((d)=>{

        // dataPeritem={

        // }
        return(
        <ul className='card1' key={d.id}>
           <li className='itemname'>{d.itemname}</li>
           <li className='gradient'>{d.gradient}</li>
           <li className='price'>&#8377;{d.price}</li>  
           <li className='right1'>Amount <input type="number" name="itemnumber"  min="1"
              max="5"
              defaultValue={props.payload+1}
              onChange={handleQuantityClick}
              /></li>
            <li className='rightButton'><Button onClick={props.addToCart}>+Add</Button></li>
        </ul>
        )
      })
    }
    </div>
    </div>
  )
}
const mapStateToProps = (state) => {
    // console.log("my map state to props",state)
  return {
          payload:state.payload,
          // data:state.data
         };

};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => dispatch(),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Fooditem)