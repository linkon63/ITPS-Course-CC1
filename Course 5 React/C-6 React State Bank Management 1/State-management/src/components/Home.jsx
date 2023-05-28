import { useState } from "react";
import MoneyCard from "./MoneyCard";

function Home() {
  const [totalMoney, setTotalMoney] = useState(1000);
  const [withdrawMoney, setWithdrawMoney] = useState(0);

  const [depositMoney, setDepositMoney] = useState(0);
  const [changesDepositeMoney, setChangesDepositeMoney] = useState(1000);

  // onChange withdraw function
  const onChangeWithdrawMoney = (e) => {
    // console.log(e.target.value);
    setWithdrawMoney(e.target.value);
  };

  // withdraw button event calling function
  const withdrawButtonHandle = () => {
    console.log("I want to withdraw ", withdrawMoney);
    // corner case
    if (withdrawMoney < 0) {
      alert("You cant put negative value !");
      return;
    }

    const currentTotalMoney = totalMoney - withdrawMoney;
    if (currentTotalMoney > 0) {
      setTotalMoney(currentTotalMoney);
    } else {
      alert("You have no sufficient balance !");
    }
    setWithdrawMoney(0);
  };

  const onChangeDepositeMoney = (e) => {
    // console.log(e.target.value, typeof e.target.value + 0);
    setDepositMoney(Number(e.target.value));
  };

  const depositeButtonHandle = () => {
    console.log("You enterd", depositMoney);
    if (depositMoney < 0) {
      alert("You cant put negative value !");
      return;
    }
    // const value = depositMoney + changesDepositeMoney;
    console.log("depositMoney", depositMoney, typeof depositMoney);
    console.log("changesDepositeMoney", changesDepositeMoney);
    setChangesDepositeMoney(changesDepositeMoney + depositMoney);
    setDepositMoney(0);
  };

  return (
    <div className="text-white bg-secondary " style={{ height: "100vh" }}>
      <button
        className="btn btn-primary mt-2 ms-5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        | | |
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>I will not close if you click outside of me.</div>
        </div>
      </div>

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
          moneyProps={changesDepositeMoney}
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
          className="input p-2 me-2 w-25"
          placeholder="Enter your amount"
          value={withdrawMoney}
          min={0}
          max={10000000}
          onChange={onChangeWithdrawMoney}
        />
        <button onClick={withdrawButtonHandle} className="btn btn-dark p-2">
          Withdraw
        </button>
      </div>

      <div className="text-center pt-2">
        <input
          type="number"
          className="input p-2 me-2 w-25"
          placeholder="Enter your amount"
          value={depositMoney}
          min={0}
          max={10000000}
          onChange={onChangeDepositeMoney}
        />
        <button onClick={depositeButtonHandle} className="btn btn-dark p-2">
          Deposite
        </button>
      </div>
    </div>
  );
}

export default Home;
