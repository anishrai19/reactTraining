// import logo from './logo.svg';
import './App.css';
import Form from './component/form/Form';
import ShowList from './component/showlist/ShowList'
import { useState } from 'react';

function App() {
  const Dummy_Item = [
    {title: "Work on project"},
    {title: "task on to do list"}
  ]

  const [Item,setItem] = useState(Dummy_Item)

   const onSaveInputHandle=(InputData)=>{

    setItem((prevItem) => {
      return [InputData, ...prevItem];
    });
    console.log(Item);
  }
  return (
    <div className="App">
      <Form onSaveInputData={onSaveInputHandle}/>
      <ShowList showInputData={Item} />
    </div>
  );
}

export default App;
