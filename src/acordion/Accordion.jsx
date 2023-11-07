import React, { useState } from "react";
import "../acordion/Accordion.css";
import MyAccordian from "./MyAccordian";
import { data } from "./api";

export default function Accordion() {
  let [Questions, setquestions] = useState(data);

  return (
    <>
      <div className="mainBox">
        <h4>JS Interview Questions</h4>
        {data.map((value, index) => {
          return <MyAccordian key={index} {...value}/>;
        })}
      </div>
    </>
  );
}
