import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Update from "@mui/icons-material/Update";

export default function Form() {
  let [data, setData] = useState([
    {
      name: "",
      email: "",
      password: "",
      address: {
        line1: "",
        line2: "",
        pincode: "",
        city: "",
        state: "",
      },
      vehical: {
        vname: "",
        vnumber: "",
      },
    },
  ]);
  let [alldata, setAllData] = useState([]);
  let [index, setIndex] = useState(null);

  useEffect(() => {
    let udata = localStorage.getItem("userArr");
    let normalData = JSON.parse(udata) || [];
    setAllData(normalData);
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("userArr", JSON.stringify(alldata));
  // }, [alldata]);

  function showdata(e) {
    e.preventDefault();
    if (
      data.name.trim().length !== 0 &&
      data.email.trim().length !== 0 &&
      data.password.trim().length !== 0 &&
      data.address.line1.trim().length !== 0 &&
      data.address.line2.trim().length !== 0 &&
      data.address.pincode.trim().length !== 0 &&
      data.address.city.trim().length !== 0 &&
      data.address.state.trim().length !== 0 &&
      data.vehical.vname.trim().length !== 0 &&
      data.vehical.vnumber.trim().length !== 0
    ) {
      setAllData([...alldata, data]);
      setData({
        name: "",
        email: "",
        password: "",
        address: {
          line1: "",
          line2: "",
          pincode: "",
          city: "",
          state: "",
        },
        vehical: {
          vname: "",
          vnumber: "",
        },
      });
      localStorage.setItem("userArr", JSON.stringify([...alldata, data]));
    } else {
      alert("Please fill all feilds");
    }
  }
  function DeleteHandler(i) {
    let updatedData = alldata.filter((element, index) => index !== i);
    setAllData(updatedData);

    localStorage.setItem("userArr", JSON.stringify(updatedData));
  }
  function editData(i) {
    setData(alldata[i]);
    setIndex(i);
  }
  function swipeData() {
    if (
      data.name.trim().length !== 0 &&
      data.email.trim().length !== 0 &&
      data.password.trim().length !== 0 &&
      data.address.line1.trim().length !== 0 &&
      data.address.line2.trim().length !== 0 &&
      data.address.pincode.trim().length !== 0 &&
      data.address.city.trim().length !== 0 &&
      data.address.state.trim().length !== 0 &&
      data.vehical.vname.trim().length !== 0 &&
      data.vehical.vnumber.trim().length !== 0
    ) {
      let updatedData = [...alldata];
      updatedData.splice(index, 1, data);
      setAllData(updatedData);
      localStorage.setItem("userArr", JSON.stringify(updatedData));
      setData({
        name: "",
        email: "",
        password: "",
        address: {
          line1: "",
          line2: "",
          pincode: "",
          city: "",
          state: "",
        },
        vehical: {
          vname: "",
          vnumber: "",
        },
      });
      setIndex(null);
    } else {
      alert("Please enter the Feild");
    }
  }
  return (
    <>
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center gap-5"
      >
        <div>
          <form className="d-grid">
            <label htmlFor="">Name:</label>
            <input
              value={data.name}
              type="text"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label htmlFor="">Email:</label>
            <input
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label htmlFor="">Password:</label>
            <input
              type="text"
              value={data?.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </form>
        </div>
        <div>
          <form className="d-grid">
            <label htmlFor="">Line1:</label>
            <input
              type="text"
              value={data?.address?.line1}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, line1: e.target.value },
                })
              }
            />
            <label htmlFor="">Line2:</label>
            <input
              type="text"
              value={data?.address?.line2}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, line2: e.target.value },
                })
              }
            />
            <label htmlFor="">PinCode:</label>
            <input
              type="text"
              value={data?.address?.pincode}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, pincode: e.target.value },
                })
              }
            />
            <label htmlFor="">City:</label>
            <input
              type="text"
              value={data?.address?.city}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, city: e.target.value },
                })
              }
            />
            <label htmlFor="">State:</label>
            <input
              type="text"
              value={data?.address?.state}
              onChange={(e) =>
                setData({
                  ...data,
                  address: { ...data.address, state: e.target.value },
                })
              }
            />
          </form>
          {index == null ? (
            <Button
              onClick={(e) => showdata(e)}
              variant="primary"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => swipeData()}
              style={{ marginTop: "20px" }}
            >
              Update
            </Button>
          )}
        </div>
        <div>
          <form className="d-grid">
            <label htmlFor="">Vehical Name:</label>
            <input
              type="text"
              value={data?.vehical?.vname}
              onChange={(e) =>
                setData({
                  ...data,
                  vehical: { ...data.vehical, vname: e.target.value },
                })
              }
            />
            <label htmlFor="">Vehical Number:</label>
            <input
              type="text"
              value={data?.vehical?.vnumber}
              onChange={(e) =>
                setData({
                  ...data,
                  vehical: { ...data.vehical, vnumber: e.target.value },
                })
              }
            />
          </form>
        </div>
      </div>
      <Table bordered hover style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Sr No:</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Vehical Name</th>
            <th>Vehical Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>
                  {value.address.line1},{value.address.line2},
                  {value.address.pincode}
                </td>
                <td>{value.address.city}</td>
                <td>{value.address.state}</td>
                <td>{value.vehical.vname}</td>
                <td>{value.vehical.vnumber}</td>
                <td className="d-flex gap-2">
                  <Button
                    variant="primary"
                    onClick={() => DeleteHandler(index)}
                  >
                    Delete
                  </Button>
                  <Button onClick={() => editData(index)} variant="primary">
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
