import React from 'react'
import "./Popup.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const Popup = (props) => {
  const heading = ["Item", "Description", "Rate", "Quantity"];
  const total = props.updatedData.map((item) => {
    return item.price * item.quantity;
  });

  const price = total.reduce((item,num) => {return item+num })
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon">
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </span>

        <article>
          <h1 className="popup_heading"> Order Receipt</h1>
          <address>
            <p>
              Food App
              <br />
            </p>
          </address>
          <div className='item-table'>
            
          
          <table className="inventory">
            <thead>
              <tr>
                {heading.map((item) => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {props.updatedData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span className="popup_items">{item.name}</span>
                    </td>
                    <td>
                      <span className="popup_items">{item.info}</span>
                    </td>
                    <td>
                      <span className="popup_items">${item.price}</span>
                    </td>
                    <td>
                      <span className="popup_items">{item.quantity}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          <table className="balance">
            <thead>
              <tr className="thead">
                <th>
                  <span>Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="thead">
                <td>
                  <span className="popup_items">${price}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <input type="button" className="orderBtn" value="Order" />
        <input type="button" className="orderBtn" value="Close" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    updatedData: state.FoodReducer.updatedData,
    numOfFoods: state.FoodReducer.data,
    payload: state.FoodReducer.payload,
  };
};

export default connect(mapStateToProps)(Popup);
