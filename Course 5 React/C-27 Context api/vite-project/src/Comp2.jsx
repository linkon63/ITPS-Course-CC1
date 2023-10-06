import { useContext } from "react";
import { GlobalObj } from "./App";

const Comp2 = () => {
  const [obj, setObj] = useContext(GlobalObj);

  return (
    <div className="bg-secondary w-50">
      <h1>Comp 2</h1>
      <div className="bg-primary text-white text-center">
        <h4>Name : {obj?.name}</h4>
        <h4>Age : {obj?.age}</h4>
      </div>
      <button
        className="btn btn-info me-2"
        onClick={() => setObj({ ...obj, name: "Im from Comp2" })}
      >
        Change the name
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setObj({ ...obj, age: 2 })}
      >
        Change the age
      </button>
    </div>
  );
};

export default Comp2;
