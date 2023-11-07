import React from "react";
import "./NavBar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cardData } from "../../ServicePageData";

export let currentIndex;
export default function Services() {
  let router = useNavigate();
  function NavigateToBuy(i) {
    router("/service/buy");
    currentIndex = i;
  }
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((element, index) => {
            return (
              <div
                key={index}
                className="col-lg-4 col-12 col-md-6 col-sm-12 my-3"
              >
                <div className="card">
                  <div className="imgcard">
                    <img
                      src={element.imgsrc}
                      className="card-img-top img-fluid"
                      alt="Oops! Imgae not found"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{element.courseName}</h5>
                    <p className="card-text">{element.courseName}</p>
                    <Button
                      to={"/service/buy"}
                      className="btn btn-primary"
                      onClick={() => NavigateToBuy(index)}
                    >
                      Go somewhere
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
