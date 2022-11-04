import { Provider } from "react-redux";
import { store } from "./component/Redux/Store/store";
import Table from "./component/Table/Table";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
