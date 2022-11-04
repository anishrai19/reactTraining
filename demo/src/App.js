import './App.css';
import Form from "./component/Form/Form";
import Wrapper from './component/wrapper/Wrapper';
import OtherComponent from './component/otherComponent/OtherComponent';
// import Showdata from './component/Showdata/Showdata';

function App() {
  return (
      <Wrapper>

         <Form/>
      
         <OtherComponent/>

        {/* <Showdata/> */}
      </Wrapper>

      // <div>

      // </div>
  );
}

export default App;
