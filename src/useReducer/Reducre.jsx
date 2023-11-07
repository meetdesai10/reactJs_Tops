import React, { useReducer } from "react";
let intialState = 2;
function reducer(state, action) {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return ++state;
  }
  if (action.type === "MULTIPLICTION") {
    return state * 2;
  }
  if (action.type === "DIVIDATION") {
    return state / 2;
  }
  if (action.type === "SUBTRACTION") {
    return state - 1;
  } else {
    return --state;
  }
}
export default function Reducre() {
  let [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div style={{ width: "15%" }}>
      <h1>{state}</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
        <button onClick={() => dispatch({ type: "MULTIPLICTION" })}>
          MULTIPLICATION WITH 2
        </button>
        <button onClick={() => dispatch({ type: "SUBTRACTION" })}>
          SUNTRACTION WITH 1
        </button>
        <button onClick={() => dispatch({ type: "DIVIDATION" })}>
          DIVIDATION WITH 2
        </button>
      </div>
    </div>
  );
}
