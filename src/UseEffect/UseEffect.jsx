import React, { useEffect, useState } from "react";

export default function UseEffect() {
  let [num, setnum] = useState(0);
  let [num2, setnum2] = useState(0);
  
  useEffect(() => {
    alert("I am clicked");
  }, [num]); 
  
  return (
    <div>
      <button
        onClick={() => {
          setnum(++num);
        }}
      >
        Click Here {num}
      </button>
      <br />
      <button
        onClick={() => {
          setnum2(++num2);
        }}
      >
        Click Here {num2}
      </button>
    </div>
  );
}
