import React from 'react'
import "./formSection1.css"

const formSection1 = () => {
  return (
  
    <div className="section1"> 
    <form >
        <div className="form_content">
        <div className="form_section">
        <label for="expense_name">Expense Name</label>
        <input type="text" placeholder="enter user name" id="expense_name"/>
        </div>
       
         <div className="form_section">
         <label for="expense_amt">Expense Amount</label>
          <input type="number" placeholder="enter expense amount" id="expense_amt"/>
         </div>
        
         <div className="form_section">
         <label for="expense_date">Expense Amount</label>
         <input type="date" placeholder="enter date" id="expense_date"/>
         </div>
        </div>

        <div className="btn">
        <button type="button">Submit</button>
        </div>

      </form>
    </div>
      
    

  )
}

export default formSection1