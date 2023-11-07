import React, { useContext } from "react";
import { Fristname, Lasttname } from "./ComX";
import { useMyContext } from "./MyContext";
export default function ComZ() {
  let fname = useContext(Fristname);
  let lname = useContext(Lasttname);
  let { count, setCount } = useMyContext();
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>
        <h1>{count}</h1>i am {fname} {lname}
        <br />
        <button onClick={() => inc()}>inc</button>
        <button onClick={() => dec()}>dec</button>
      </h1>
    </div>
  );
}
