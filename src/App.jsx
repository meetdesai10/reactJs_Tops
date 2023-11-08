import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./googlekeepapp/Googlekeep.css";
import "./googlekeepapp/Input.css";
import { Route, Routes, Navigate } from "react-router-dom";
import ToDoList from "./Todolist/ToDoList";
import Bootstrap from "./bootstrap/Bootstrap";
import Accordion from "./acordion/Accordion";
import Cards from "./card/Cards";
import Header from "./googlekeepapp/Header";
import Inputs from "./googlekeepapp/Inputs";
import Radio from "./Radio";
import ComA from "./context API/ComA";
import ComX from "./usecontext/ComX";
import UseEffect from "./UseEffect/UseEffect";
import UseEffectPractical from "./UseEffect/UseEffectPractical";
import CovidData from "./GetCovid-19-Data/CovidData";
import Home from "./WebsiteProject/NavBar/Home";
import About from "./WebsiteProject/Navbar/About";
import Services from "./WebsiteProject/Navbar/Services";
import NavBar from "./WebsiteProject/Navbar/NavBar";
import Form from "./Form/Form";
import Data from "./dataflow/Data";
import Pockemon from "./Pockemon/Pockemon";
import BuyNow from "./WebsiteProject/Navbar/BuyNow";
import Meet from "./meet";
import { ContactUs } from "./WebsiteProject/Navbar/ContactUs";
import { MyProvider } from "./usecontext/MyContext";
import Reducre from "./useReducer/Reducre";
import UseRef from "./useRef/UseRef";
export default function App() {
  return (
    <>
      {/* <ToDoList />  */}
      {/* <Bootstrap/> */}
      {/* <Accordion/> */}
      {/* <Cards/> */}
      {/* <Header/> */}
      {/* <Inputs/> */}
      {/* <Radio/> */}
      {/* <ComA /> */}
      {/* <MyProvider>
        <ComX />
      </MyProvider> */}
      {/* <UseEffect/> */}
      {/* <UseEffectPractical/> */}
      {/* <CovidData/> */}
      {/* <Pockemon/> */}
      {/* <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/">
          <Route index element={<Services />} />
          <Route path="buy" element={<BuyNow />} />

        </Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes> */}
      {/* <Form/> */}
      {/* <Data/> */}
      {/* <Meet/> */}
      {/* <Reducre/> */}
      <UseRef />
    </>
  );
}
