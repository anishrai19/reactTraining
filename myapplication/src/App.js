import Header from "./Expense/header/Header"
import FormSection1 from "./Expense/formSection1/FormSection1";
import FormSection2 from "./Expense/formSection2/FormSection2";
import './App.css';

function App() {
  return (
    <div className="main">
      <Header />
      <FormSection1/>
      <FormSection2/>
    </div>
   
  );
}

export default App;
