import React, { useContext, useState } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import { GlobalObj } from "./App";

export default function MainCom() {
  const [obj, setObj] = useContext(GlobalObj);
  return (
    <div>
      <h1>App components</h1>
      <div className="bg-dark text-white text-center">
        <h4>Name : {obj.name}</h4>
        <h4>Age : {obj.age}</h4>
      </div>
      <div className="text-center">
        <button
          className="btn btn-info me-2"
          onClick={() => setObj({ ...obj, name: "Main Component" })}
        >
          Change the name
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setObj({ ...obj, age: 0 })}
        >
          Change the age
        </button>
      </div>
      <div className="d-flex">
        <Comp1/>
        <Comp2/>
      </div>
    </div>
  );
}
