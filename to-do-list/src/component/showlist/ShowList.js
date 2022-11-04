import React from 'react'
import "./ShowList.css"

const ShowList = (props) => {
    console.log(props.showInputData)
    
  return (
    <div className='List_container'>
    {/* <div className='goal_item'> */}
    <div className="item_list">
      <div className="item-list__description">
        <ul id="item">{props.showInputData.map(item=>(
                <li className='goal_item'>{item.title}</li>
            )
        )}</ul>
        </div>
    {/* </div> */}
    </div>
    </div>
  )
}

export default ShowList