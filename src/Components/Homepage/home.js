/*import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const Home = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);

  let navigator = useNavigate();

    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div
            class="ml-50 collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "blue" }}
                  aria-current="page"
                  href="#"
                  onMouseOver={() => {
                    setFlag1(true);
                  }}
                  onMouseOut={() => {
                    setFlag1(false);
                  }}
                >
                  Information
                </a>
                <div
                  style={{
                    display: flag1 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "blue",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>




              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "blue" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag2(true);
                  }}
                  onMouseOut={() => {
                    setFlag2(false);
                  }}
                  onClick={() => {navigator("/ContactUs")
                  }}
                >
                  Contact-Us
                </a>
                <div
                  style={{
                    display: flag2 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "blue",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>



              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "blue" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag3(true);
                  }}
                  onMouseOut={() => {
                    setFlag3(false);
                  }}
                  onClick={() => {navigator("/Login")
                  }}
                >
                  Login
                </a>
                <div
                  style={{
                    display: flag3 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "blue",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>


              <li class="nav-item dropdown">
                 <a
                  class="nav-link navbar-brand"
                  style={{ color: "blue" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag4(true);
                  }}
                  onMouseOut={() => {
                    setFlag4(false);
                  }}
                  onClick={() => {navigator("/CustRegistration")
                }}
                >
                  User Registeration
                </a>
                <div
                  style={{
                    display: flag4 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "blue",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>




              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{ color: "blue" }}
                  href="#"
                  onMouseOver={() => {
                    setFlag5(true);
                  }}
                  onMouseOut={() => {
                    setFlag5(false);
                  }}
                  onClick={() => {navigator("/ServRegistration")
                  }}
                >
                  Service Center Registeration
                </a>
                <div
                  style={{
                    display: flag5 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "blue",
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  };
  export default Home;*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/HomeBackgroundImage.jpeg";

const Home = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);

  let navigator = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        minWidth: "50vh",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(165, 170, 200) ", zIndex: 1 }}
      >
        <div className="container-fluid">
          <div
            className="ml-50 collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link navbar-brand"
                  style={{
                    color: "#fff", // white text color
                    textDecorationColor: "#fff", // white underline color
                  }}
                  aria-current="page"
                  href="#"
                  onMouseOver={() => setFlag1(true)}
                  onMouseOut={() => setFlag1(false)}
                >
                  Information
                </a>
                <div
                  style={{
                    display: flag1 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#fff", // white underline color
                    borderRadius: "5%",
                  }}
                ></div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{
                    color: "#fff", // white text color
                    textDecorationColor: "#fff", // white underline color
                  }}
                  href="#"
                  onMouseOver={() => setFlag2(true)}
                  onMouseOut={() => setFlag2(false)}
                  onClick={() => navigator("/ContactUs")}
                >
                  Contact-Us
                </a>
                <div
                  style={{
                    display: flag2 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#fff", // white underline color
                    borderRadius: "5%",
                  }}
                ></div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{
                    color: "#fff", // white text color
                    textDecorationColor: "#fff", // white underline color
                  }}
                  href="#"
                  onMouseOver={() => setFlag3(true)}
                  onMouseOut={() => setFlag3(false)}
                  onClick={() => navigator("/Login")}
                >
                  Login
                </a>
                <div
                  style={{
                    display: flag3 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#fff", // white underline color
                    borderRadius: "5%",
                  }}
                ></div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{
                    color: "#fff", // white text color
                    textDecorationColor: "#fff", // white underline color
                   
                  }}
                  href="#"
                  onMouseOver={() => setFlag4(true)}
                  onMouseOut={() => setFlag4(false)}
                  onClick={() => navigator("/CustRegistration")}
                >
                  User Registration
                </a>
                <div
                  style={{
                    display: flag4 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#fff", // white underline color
                    borderRadius: "5%",
                  }}
                ></div>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link navbar-brand"
                  style={{
                    color: "#fff", // white text color
                    textDecorationColor: "#fff", // white underline color
                  }}
                  href="#"
                  onMouseOver={() => setFlag5(true)}
                  onMouseOut={() => setFlag5(false)}
                  onClick={() => navigator("/ServRegistration")}
                >
                  Service Center Registration
                </a>
                <div
                  style={{
                    display: flag5 ? "block" : "none",
                    height: "3px",
                    width: "100%",
                    backgroundColor: "#fff", // white underline color
                    borderRadius: "5%",
                  }}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Home;
