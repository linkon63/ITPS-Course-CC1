import { useState } from "react";
import Home from "./components/Home";

function App() {
  // user money state
  // const [currentMoney, setCurrentMoney] = useState(0);
  // // handle money increase event
  // const moneyPlus = () => {
  //   let moneyIncrease = currentMoney + 1;
  //   setCurrentMoney(moneyIncrease);
  // };
  // // handle money decrease event
  // function moneyMinus() {
  //   let moneyDecrease = currentMoney - 1;
  //   setCurrentMoney(moneyDecrease);
  // }
  return (
    <>
      <Home />
      {/* <h1>Your current money = {currentMoney} </h1>
      <button onClick={moneyPlus}>Increase Money</button>
      <button onClick={moneyMinus}>Decrease Money</button> */}
    </>
  );
}

export default App;
