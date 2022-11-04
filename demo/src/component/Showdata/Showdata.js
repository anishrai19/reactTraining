import React from 'react'
import "./Showdata.css"
import Table from "../table/Table"

const Showdata = (props) => {
    
    // console.log(props.data);
  return (
    <div className='main'>
      <div className='section'>
        <div className='container'>
            <h1>Expense Details</h1>

            <div className="expense-item">
                <div className="expense_date">{props.data.date}</div>
                 <div className="expense-item__description">
                 <h2 id="expense_item">{props.data.item_name}</h2>
                 <div className="expense-item__price">{props.data.item_price}</div>
                </div>
            </div>
        </div>
        <table>
          <thead>
            <Table/>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Showdata