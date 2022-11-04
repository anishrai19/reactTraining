// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CounterSection from './component/counterSection/CounterSection';
import CounterDisplay from './component/counterDisplay/CounterDisplay';

function App() {
  // const data1=""

  const [data,setData]=useState(0);
  const dataReceived=(data)=>{
    
    setData(data)

  }
  console.log(data);

  return (
    <div className='mainContanier'>
    <div className="App">
     <CounterSection CounterData={dataReceived}/>
    </div>
     <CounterDisplay sendCounterData={data}/>
    </div>
  );
}

export default App;
