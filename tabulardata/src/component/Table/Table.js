import React from 'react'
import { connect } from 'react-redux'
import { FETCHDATA } from '../../redux/Action/Action'
import "./Table.css"

const Table = (props) => {
    const heading = ["ID","USERNAME","EMAIL"]
  return (
    <div className='btn'>
        <button type="button" onClick={props.FetchReducer}>Show Data</button>
    <table>
        <thead>
        
            <tr>
            {
                heading.map(item => {
                    return (
                        <th key={item}>{item}</th>
                    )
                })
               
            }
            </tr>
        </thead>
        <tbody>
            {
                props.users.FetchReducer.users.map((data, index)=>
                    <tr key={index}>

                                    <td>{data.id}</td>

                                    <td>{data.username}</td>

                                    <td>{data.email}</td>

                                    <td></td>

                                </tr>
                )
                }
            
        </tbody>
    </table>
    </div>
  )
  
}

const mapStateToProps = (state) => {
    return {
      users: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      FetchReducer: () => dispatch(FETCHDATA()),
    };
    
};

export default connect(mapStateToProps , mapDispatchToProps)(Table)