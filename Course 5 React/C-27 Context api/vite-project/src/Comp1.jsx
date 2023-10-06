import React, { useContext } from "react";
import { GlobalObj } from "./App";

const Comp1 = () => {
    const [obj, setObj] = useContext(GlobalObj);
  return (
    <div className="bg-primary w-50">
      <h1>Comp 1</h1>
      <div className="bg-primary text-white text-center">
        <h4>Name : {obj?.name}</h4>
        <h4>Age : {obj?.age}</h4>
      </div>
      <button
        className="btn btn-info me-2"
        onClick={() => setObj({ ...obj, name: "Im from Comp1" })}
      >
        Change the name
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setObj({ ...obj, age: 1 })}
      >
        Change the age
      </button>
    </div>
  );
};

export default Comp1;
