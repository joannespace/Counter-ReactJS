import React, {useState} from 'react'
import "./App.css";

function App() {

    const [count,setCount] = useState(0)

    // Style adjust color
    let color = (count > 0) ? "green" : (count < 0) ? "red" : "black";

    const increase = () => {setCount(count + 1)};
    const decrease = () => {setCount(count - 1)};
    const reset = () => {setCount(0)};

    return (
    <div id="container">
      <h1 id="counter">Counter</h1>
      <div id="number" style={{color}}>{count}</div>
      <div id="button-group">
        <button id="button-decrease" onClick={decrease}>Decrease</button>
        <button id="button-reset" onClick={reset}>Reset</button>
        <button id="button-increase" onClick={increase}>Increase</button>
      </div>
    </div>
        
  )
}

export default App;
