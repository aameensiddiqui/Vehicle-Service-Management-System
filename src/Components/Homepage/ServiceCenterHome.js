/*import React from "react";

const ServiceHome = () => {
  return (
    <div>
      <h1> Service Center Home Page </h1>
    </div>
  );
};

export default ServiceHome;*/

import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import DateTime from "../DateTime";

export default function ServiceCenterHome() {
  const [data, setData] = useState([]);
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();

  // const showServiceCenterData = () => {
  //   console.log("ServiceCenterHomePage");
  //   var loginid = JSON.parse(localStorage.getItem("loginid"));
  //   fetch("http://localhost:8080/getScDetailsByLoginid?loginid=" + loginid)
  //     .then((resp) => resp.json())
  //     .then((jsonData) => setData(jsonData))
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    var loginid = localStorage.getItem("loginid");
    fetch("http://localhost:8080/getScDetailsByLoginid?loginid=" + loginid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
        localStorage.setItem("scid", jsonData.servicecenterid);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (mystate.logged === false) {
      navigate("/userlogin");
    }
    //showServiceCenterData();
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
                  Create Service Packages
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="viewBookings" className="nav-link px-3">
                  View Bookings
                </Link>
              </li> */}
              <li>
                <Link to="updateProgress" className="nav-link px-3">
                  Update Service Progress
                </Link>
              </li>
              <li>
                <Link
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
      <div>
        <div
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            color: "black",
            padding: "10px",
          }}
        >
          <h3>Service Center - {data?.scname}</h3>
          <h5 className="lead">Associated with - {data?.brand?.bname}</h5>
        </div>
        <div style={{ backgroundColor: "lightgray" }}>{DateTime()}</div>
        <br />

        <Outlet />
      </div>
    </div>
  );
}
