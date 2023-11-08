import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  // let [count, setCount] = useState(0);
  let [data, setData] = useState("");
  let count2 = useRef(0);
  useEffect(() => {
    // setCount(count + 1);
    count2.current = count2.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>{count2.current}</h1>
    </div>
  );
}
