import React , {component, useState} from "react";
import logo from './logo.svg';
import './App.css';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {value};
};
const App =() => {
  const name = useInput("Mr.") //name 이랑 value랑 같아진다
  return (
    <>
      <div className="App">
          <h1>hello</h1>
          <input placeholder="Name"/>
      </div>
    </>
  );
}

export default App;
