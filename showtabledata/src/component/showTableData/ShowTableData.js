import React from 'react'
import "./ShowTableData.css"
// import Form from '../form/Form';


const ShowTableData = (props) => {

    console.log("hello" , props.showData)
  
//   const tableRows = props.showData.map((info,index) => {
//     return (
//       <tr>
//         <td>{index+1}</td>
//         <td>{info.item_name}</td>
//         <td>{info.item_price}</td>
//       </tr>
//     );
//   });
  

  
  return (
    <div className='container'>
        {/* <Form sendTableData={addRows} /> */}
      <table className="table table-stripped showItem">
        <thead >
          <tr className='tableHead'>
            <th>Sr.NO</th>
            <th>Item Name</th>
            <th>Item Price</th>
          </tr>
        </thead>
        {/* <tbody>{tableRows}</tbody> */}
        <tbody >
            {
                props.showData.map((item,index)=>{
                    return (<tr className='showItem1'>
                        <td>{index+1}</td>
                        <td>{item.item_name}</td>
                        <td>{item.item_price}</td>
                    </tr>)
                })
            }
        </tbody>
      </table>
      
    </div>
  );
 
}

export default ShowTableData