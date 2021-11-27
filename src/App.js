import logo from './logo.svg';
import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {

  const [result, setResult ] = useState();
  const [isLoad, setLoad] = useState(false);

  const callBe = async () => {
    setLoad(true);
    const response = await axios.get('http://localhost:3005/test');
    setLoad(false);
    setResult(response.data.message);
  };

  const resultEl = ()=>{
    const response = isLoad ? "Loading..." : result;
    return response;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span onClick={callBe} className="App-click">Click here to connection test</span>
          <div>{resultEl()}</div>
        </p>

      </header>
    </div>
  );
}

export default App;
