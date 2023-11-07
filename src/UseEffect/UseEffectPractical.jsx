import React, { useEffect, useState } from "react";

export default function UseEffectPractical() {
  let [num, setnum] = useState(0);
  useEffect(()=>{
    document.title=`You Clicked me ${num} times`;
  })
  return (
    <>
      <button className="me-5 mt-5" onClick={() => setnum(++num)}>CLick Here {num}</button>
    </>
  );
}
