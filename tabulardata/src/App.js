// import logo from './logo.svg';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Table from "./component/Table/Table";

function App() {
  

  return (
    <div className="App">
     <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
    </div>
  );
}

export default App;





