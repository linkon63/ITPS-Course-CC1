import { useState } from "react";
import MoneyCard from "./MoneyCard";

function Home() {
  const [totalMoney, setTotalMoney] = useState(1000);
  const [withdrawMoney, setWithdrawMoney] = useState(0);

  // onChange withdraw function
  const onChangeWithdrawMoney = (e) => {
    // console.log(e.target.value);
    setWithdrawMoney(e.target.value);
  };

  // withdraw button event calling function
  const withdrawButtonHandle = () => {
    console.log("I want to withdraw ", withdrawMoney);
    const currentTotalMoney = totalMoney - withdrawMoney;
    if (currentTotalMoney > 0) {
      setTotalMoney(currentTotalMoney);
    } else {
      alert("You have no sufficient balance !");
    }
    setWithdrawMoney(0);
  };

  return (
    <div className="text-white bg-primary " style={{ height: "100vh" }}>
      <div className="text-center pt-5">
        <h1>Bank Management</h1>
      </div>

      <div className="row pt-5 w-100 text-center justify-content-md-center">
        <MoneyCard
          title="Withdraw money"
          moneyProps={1000 - totalMoney}
          dynamicClass="bg-danger text-white"
        />
        <MoneyCard
          title="Deposit money"
          moneyProps={1000}
          dynamicClass="bg-info text-white"
        />
        <MoneyCard
          title="Total money"
          moneyProps={totalMoney}
          dynamicClass="bg-success text-white"
        />
        {/* Withdraw section start */}

        {/* Withdraw section end */}

        {/* money status section start */}
        {/* <div className="row pt-5 g-2 w-100 text-center ">
          <div
            className="card col-md-4 pt-3 bg-danger text-white"
            style={{ height: "200px" }}
          >
            <h3>Withdraw money</h3>
            <h1>{1000 - totalMoney}</h1>
          </div>
          <div
            className="card col-md-4 pt-3 bg-info text-white"
            style={{ height: "200px" }}
          >
            <h3>Deposit money</h3>
            <h1>1000</h1>
          </div>
          <div
            className="card col-md-4 pt-3 bg-success text-white"
            style={{ height: "200px" }}
          >
            <h3>Total money</h3>
            <h1>{totalMoney}</h1>
          </div>
        </div> */}
        {/* money status section end */}
      </div>

      <div className="text-center pt-5">
        <input
          type="number"
          className="input p-2 me-2"
          placeholder="Enter your amount"
          value={withdrawMoney}
          onChange={onChangeWithdrawMoney}
        />
        <button onClick={withdrawButtonHandle} className="btn btn-dark p-2">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default Home;
