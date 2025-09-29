import { useState } from "react";
// Hooks let you add state (data that changes over time) to your functional component.
// and useState is a React Hook.

function App() {
  let [counter, setCounter] = useState(0);
  // setCounter is the function used to update the state of state variable counter

  const addValue = () => {
    console.log("Value added", counter);
    setCounter(counter + 1);  // it logs the current value and increases the counter by 1.
  }
  const removeValue = () => {
    console.log("Value removed", counter);
    if(counter > 0) setCounter(counter - 1);  // it logs the current value and decreases the counter by 1.
  }

  return (
    <>

     <h1>Ansh Darji</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Increase value</button> <br />
     <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
