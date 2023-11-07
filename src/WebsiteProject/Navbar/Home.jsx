import React from "react";
import HomeAboutCommon from "../Navbar/HomeAboutCommon";
import web from "../../Images/webimg.webp";

export default function Home() {
  const servicestyle = {
    backgroundColor: "blue",
    color: "black",
  };
  return (
    <>
     <HomeAboutCommon welcome="Welcome to Home Pgae" imgsrc={web} path="/service" btnname="Get Started"/>
    </>
  );
}
