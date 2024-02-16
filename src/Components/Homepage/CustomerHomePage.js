/*import React from "react";

const CustomerHome = () => {
  return (
    <div>
      <h1> Customer Home Page </h1>
    </div>
  );
};

export default CustomerHome;*/

////////////////////////////////////

import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DateTime from "../DateTime";

export default function CustomerHomePage() {
  const [data, setData] = useState([]);
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();

  const showCustomerData = () => {
    //console.log("CustomerHomePage");
    var loginid = JSON.parse(localStorage.getItem("loginid"));
    fetch("http://localhost:8080/getCustomerdetails?loginid=" + loginid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        setData(jsonData);
        localStorage.setItem("custid", JSON.stringify(jsonData.customerid));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (mystate.logged === false) {
      navigate("/userlogin");
    }
    showCustomerData();
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-light"
        style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.2)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            VSMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/customerhome"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Profile"
                  menuVariant="light"
                >
                  <NavDropdown.Item>
                    <Link to="customerregistration" className="nav-link">
                      Update Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="changePwd" className="nav-link">
                      Change Password
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to="viewScLogin" className="nav-link px-3">
                  View Service Centers
                </Link>
              </li>
              <li className="nav-item">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vehicle"
                  menuVariant="light"
                >
                  <NavDropdown.Item>
                    <Link to="registervehicle" className="nav-link">
                      Register New Vehicle
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="vehdetails" className="nav-link">
                      View Registered Vehicles
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <Link to="bookAppointment" className="nav-link px-3">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="serviceprogress" className="nav-link px-3">
                  Service Progress
                </Link>
              </li>

              <li>
                <Link to="rate" className="nav-link px-3">
                  Rate A Service
                </Link>
              </li>

              <li>
                <Link
                  // to="/logout"
                  to="/"
                  className="nav-link px-3"
                  //onClick={{ mystate: false }}
                  id="logout"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <div
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          color: "black",
        }}
      >
        <h3>
          Welcome - {data.firstname} {data.lastname}
        </h3>
      </div>
      <div style={{ backgroundColor: "lightgray" }}>{DateTime()}</div>
      <br />
      <div style={{ minHeight: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}
