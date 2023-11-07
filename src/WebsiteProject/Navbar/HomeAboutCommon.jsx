import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function HomeAboutCommon(props) {
  const servicestyle = {
    backgroundColor: "blue",
    color: "black",
  };
  return (
    <>
      <div className="main-container container d-flex align-items-center justify-content-center">
        <div className="row d-flex align-items-center justify-content-center">
          <div className=" col-lg-6 col-sm-12">
            <h1 className="welcome">{props.welcome}</h1>
            <h2 className="line">Learn coding with our best experienced team</h2>
            <NavLink to={props.path} className="ser">
              {props.btnname}
            </NavLink>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img src={props.imgsrc} className="home-image img-fluid" alt="!Found 404" />
          </div>
        </div>
      </div>
    </>
  );
}
