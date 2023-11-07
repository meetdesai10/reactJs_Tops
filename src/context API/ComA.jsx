import React, { createContext, useState } from "react";
import ComB from "./ComB";

export let Fname = createContext();
export let Lname = createContext();
export let Age = createContext();
export default function ComA() {
  return (
    <div>
      <Fname.Provider value="meet">
        <Lname.Provider value="desai">
          <Age.Provider value="21">
            <ComB />
          </Age.Provider>
        </Lname.Provider>
      </Fname.Provider>
    </div>
  );
}
