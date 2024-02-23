import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";

import CustRegistration from "./Components/Register/CustRegistration";
import ServRegistration from "./Components/Register/ServRegistration";
import ContactUs from "./Components/UseCases/ContactUs";
import AdminHome from "./Components/Homepage/AdminHome";
import CustomerHomePage from "./Components/Homepage/CustomerHomePage";
import ServiceCenterHomePage from "./Components/Homepage/ServiceCenterHome";
import VehRegistration from "./Components/Register/VehRegistration";
import CreatePackages from "./Components/UseCases/CreatePackages";
import ViewPackages from "./Components/UseCases/viewPackages";
import ViewAllCust from "./Components/UseCases/ViewAllCust";
import ViewAllSC from "./Components/UseCases/ViewAllSC";
import ViewAllVehicles from "./Components/UseCases/ViewAllVehicles";
import NotFound from "./Components/ErrorPage/NotFound";
import Login from "./Components/Login/LoginPage";
import ViewServiceCenters from "./Components/UseCases/ViewServiceCenters";
import VehDetails from "./Components/UseCases/VehDetails";
import BookAppointment from "./Components/UseCases/BookAppointment";
import Booking from "./Components/UseCases/Booking";
import ServiceProgress from "./Components/UseCases/ServiceProgress";
import UpdateServiceProgress from "./Components/UseCases/UpdateServiceProgress";
import ViewServiceRequests from "./Components/UseCases/ViewServiceRequests";
import Home from "./Components/Homepage/home";
import ForgotPassword from "./Components/UseCases/ForgotPassword";
import Logout from "./Components/Logout";
import ChangePassword from "./Components/UseCases/ChangePassword";
import Rating from "./Components/UseCases/Rating";
import ServerError from "./Components/ErrorPage/ServerError";

function App() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div>
      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.4)" }}
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/viewservicecenters">
                    Service Centers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="SignUp"
                    menuVariant="light"
                  >
                    <NavDropdown.Item>
                      <Link to="CustRegistration" className="nav-link">
                        User
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="ServRegistration" className="nav-link">
                        Service Center
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{ textAlign: "center" }}
            className="text-black shadow rounded-3 container-fluid"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route
                path="/viewservicecenters"
                element={<ViewServiceCenters />}
              />
              <Route path="/CustRegistration" element={<CustRegistration />} />
              <Route path="/ServRegistration" element={<ServRegistration />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              {/* <Route path="/customerhome" element={<CustomerHomePage />} /> */}
              <Route path="customerhome" element={<CustomerHomePage />} />
              {/* <Route path="/serviceHome" element={<ServiceCenterHomePage />} /> */}

              <Route path="/Logout" element={<Logout />} />
              <Route path="/vehdetails" element={<VehDetails />}></Route>

              <Route path="forgotpwd" element={<ForgotPassword />} />

              {/* ---------------------------------- Customer ----------------------------------*/}
              <Route path="customerhome" element={<CustomerHomePage />}>
                <Route path="vehdetails" element={<VehDetails />}></Route>

                <Route
                  path="registervehicle"
                  element={<VehRegistration />}
                ></Route>

                <Route
                  path="bookAppointment"
                  element={<BookAppointment />}
                ></Route>

                <Route path="viewScLogin" element={<Booking />}></Route>

                <Route path="rate" element={<Rating />}></Route>
                <Route path="changePwd" element={<ChangePassword />}></Route>

                <Route
                  path="serviceprogress"
                  element={<ServiceProgress />}
                ></Route>
              </Route>
              {/* ---------------------------------- Customer ----------------------------------*/}

              {/* ---------------------------------- Service Center ----------------------------------*/}
              <Route path="/serviceHome" element={<ServiceCenterHomePage />}>
                <Route
                  path="updateProgress"
                  element={<UpdateServiceProgress />}
                />
                <Route path="viewPackages" element={<ViewPackages />} />
                <Route path="viewScLogin" element={<CreatePackages />} />
                <Route path="changePwd" element={<ChangePassword />} />
              </Route>
              {/* ---------------------------------- Service Center ----------------------------------*/}

              {/*----------- Admin ----------*/}
              <Route path="adminHome" element={<AdminHome />}>
                <Route path="view" element={<ViewServiceRequests />}></Route>
                <Route path="changePwd" element={<ChangePassword />}></Route>

                <Route path="ViewAllCust" element={<ViewAllCust />}></Route>
                <Route path="ViewAllSC" element={<ViewAllSC />}></Route>
                <Route
                  path="ViewAllVehicles"
                  element={<ViewAllVehicles />}
                ></Route>
              </Route>
              {/*----------- Admin----------*/}
              {/*----------- Error----------*/}
              <Route path="/ServerError" element={<ServerError />}></Route>
              <Route path="*" element={<NotFound />}></Route>

              {/*----------- Error----------*/}
            </Routes>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default App;
