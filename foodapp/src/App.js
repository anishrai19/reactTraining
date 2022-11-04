// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
// import Card from './component/Card/Card';
// import Description from './component/Description/Description';
import FoodBody from './component/FoodContainer/FoodBody';
import Header from './component/Header/Header';
import store from './component/redux/store/store'
// import { itemList } from './data/data';

function App() {

 
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <FoodBody />
      </div>
    </Provider>
    
  );
}

export default App;
