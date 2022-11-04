import './App.css';
// import Chart from "./component/chart/Chart"
import ExpenseChart from './component/ExpenseChart/ExpenseChart';

function App() {

  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Book stand",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 3, 12), },

    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      
    },
  ];


  return (
    <div className="App">
      <ExpenseChart expenses={Dummy_Expenses}/>
      {/* <Chart data={Dummy_Expenses}/> */}
          </div>
  );
}

export default App;
