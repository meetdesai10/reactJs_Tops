import React, { createContext, useContext, useState } from "react";
import ComY from "./ComY";
export let Fristname = createContext();
export let Lasttname = createContext();
export default function ComX() {
  return (
    <div>
      <Fristname.Provider value="meet">
        <Lasttname.Provider value="desai">
          <ComY />
        </Lasttname.Provider>
      </Fristname.Provider>
    </div>
  );
}
