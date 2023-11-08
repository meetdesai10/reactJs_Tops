import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  // by using dependancies

  // let [count, setCount] = useState(0);
  // let [data, setData] = useState("");
  // useEffect(() => {
  //   setCount(count + 1);
  // },[data]);
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       value={data}
  //       onChange={(e) => setData(e.target.value)}
  //     />
  //     <h1>{count}</h1>
  //   </div>
  // );

  // by using use reference
  let [data, setData] = useState("");
  let count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>{count.current}</h1>
    </div>
  );
}
