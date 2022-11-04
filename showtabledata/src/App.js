// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './component/form/Form';
import ShowTableData from './component/showTableData/ShowTableData';

function App() {

  const Dummy_item = [];

  const[FormData,setFormData]=useState(Dummy_item)
  const formDataHandler=(newData)=>{
    setFormData((previtem)=>{
       return [newData,...previtem];
    })
  }

  console.log("anish",FormData)
  return (
    <div className="App">
      <Form sendTableData={formDataHandler}/>
      <ShowTableData showData={FormData}/>
    </div>
  );
}

export default App;
