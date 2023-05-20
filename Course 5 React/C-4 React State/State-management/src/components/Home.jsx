import { useState } from "react";

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
    setTotalMoney(currentTotalMoney);
  };

  return (
    <div className="text-white bg-primary " style={{ height: "100vh" }}>
      <div className="text-center pt-5">
        <h1>Bank Management</h1>
      </div>

      <div className="container">
        {/* money status section start */}
        <div className="row pt-5 g-2 w-100 text-center ">
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
        </div>
        {/* money status section end */}

        {/* Withdraw section start */}
        <div className="text-center pt-5">
          <input
            type="number"
            className="input p-2 me-2"
            placeholder="Enter your amount"
            onChange={onChangeWithdrawMoney}
          />
          <button onClick={withdrawButtonHandle} className="btn btn-dark p-2">
            Withdraw
          </button>
        </div>
        {/* Withdraw section end */}
      </div>
    </div>
  );
}

export default Home;
