import "./App.css"
import Counter from "./components/Counter"
import ExponentTwo from "./components/ExponentTwo"
import ExponentThree from "./components/ExponentThree"
import ExponentFour from "./components/ExponentFour"
import ExponentFive from "./components/ExponentFive"
import ExponentSix from "./components/ExponentSix"
import { useState } from "react"
import Exponent from "./components/Exponent"



function App () {

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter decrement={decrement} increment={increment} count={count}  />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} number={2}/>
        <Exponent count={count} number={3}/>
        <Exponent count={count} number={4}/>
        <Exponent count={count} number={5}/>
        <Exponent count={count} number={6}/>
        <p>-------------------------------</p>
        <ExponentTwo count={count} />
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/>
      </div>
    </div>
  );
}

export default App;
