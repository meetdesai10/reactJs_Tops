import React, { useState } from "react";

export default function Li() {
  let [textline, settextline] = useState(false);
  function liethrough() {
    settextline(!textline);
  }
  return (
    <>
      <li
        style={{
          textDecoration: textline ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => liethrough()}
      >
        {}
      </li>
    </>
  );
}
