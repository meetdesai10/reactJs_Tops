import React, { useState } from "react";
import "./ToDoList.css";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
export default function ToDoList() {
  let [inputvalue, setinputvalue] = useState("");
  let [indexvalue, setindexvalue] = useState(null);
  let [textline, settextline] = useState(false);
  let [radiovalue, setradiovalue] = useState("");
  let [preradiovalue, setpreradiovalue] = useState([]);
  let [data, setdata] = useState([]);
  function getinputvalue(e) {
    setinputvalue(e.target.value);
  }
  function showvalue() {
    if (inputvalue.length > 0 && radiovalue !== null && radiovalue !== "") {
      setdata((prevalue) => {
        return [...prevalue, inputvalue];
      });
      setpreradiovalue((preradio) => {
        return [...preradio, radiovalue];
      });
      setinputvalue("");
      setradiovalue("");
    } else {
      alert("frist please fill all value ");
    }
    document
      .querySelectorAll(".gender")
      .forEach((value) => (value.checked = false));
  }
  function deletelist(id) {
    setdata(() => {
      return data.filter((element, index) => {
        return index !== id;
      });
    });
    setinputvalue("");
    setindexvalue(null);
  }
  function updatelist(i) {
    setinputvalue(data[i]);
    setindexvalue(i);
  }
  function updateonclick() {
    setdata(() => {
      data.splice(indexvalue, 1, inputvalue);
      return [...data];
    });
    setpreradiovalue(() => {
      preradiovalue.splice(indexvalue, 1, radiovalue);
      return [...preradiovalue];
    });
    document
      .querySelectorAll(".gender")
      .forEach((value) => (value.checked = false));
    setinputvalue("");
    setindexvalue(null);
  }
  function liethrough() {
    settextline(!textline);
  }
  return (
    <>
      <div className="main">
        <h1>ToDo List</h1>
        <div className="flex-box">
          <input
            className="input"
            type="text"
            name=""
            id=""
            value={inputvalue}
            onChange={getinputvalue}
          />
          {indexvalue == null ? (
            <AddIcon onClick={showvalue} className="addicon" />
          ) : (
            <UpdateIcon
              onClick={() => updateonclick()}
              className="updatevalue"
            />
          )}
        </div>
        <h6 className="selectgender">Select Gender :-</h6>
        <div className="genderbtn">
          <input
            type="radio"
            name="gender"
            id=""
            onChange={(e) => setradiovalue(e.target.value)}
            value="Male"
            className="gender"
          />
          Male
          <input
            type="radio"
            name="gender"
            id=""
            onChange={(e) => setradiovalue(e.target.value)}
            value="Female"
            className="gender"
          />
          Female
        </div>
        <ol>
          {data.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <div className="iconsset">
                  <div className="lilist">
                    <li
                      style={{
                        textDecoration: textline ? "line-through" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => liethrough()}
                    >
                      {value}
                    </li>
                  </div>

                  <div style={{ display: "flex", gap: "5px" }}>
                    <button
                      onClick={() => deletelist(index)}
                      className="delete"
                    >
                      Delete
                    </button>
                    <button
                      className="update"
                      onClick={() => updatelist(index)}
                    >
                      Update
                    </button>
                  </div>
                  <p>{preradiovalue[index]}</p>
                </div>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </>
  );
}
