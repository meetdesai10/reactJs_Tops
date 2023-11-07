import React from "react";
import { Age, Fname, Lname } from "./ComA";

export default function ComC(props) {
  return (
    <div>
      <Fname.Consumer>
        {(fname) => {
          return (
            <>
              <Lname.Consumer>
                {(lname) => {
                  return (
                    <>
                      <Age.Consumer>
                        {(age) => {
                          return (
                            <h1>
                              Hello i am {fname} {lname}. I am {age} year old.
                              My Brithdate is .
                            </h1>
                          );
                        }}
                      </Age.Consumer>
                    </>
                  );
                }}
              </Lname.Consumer>
            </>
          );
        }}
      </Fname.Consumer>
    </div>
  );
}
