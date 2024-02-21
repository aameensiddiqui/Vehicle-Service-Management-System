import { Link, Outlet } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { useEffect } from "react";
import DateTime from "../DateTime";

export default function AdminHome() {
  const mystate = useSelector((state) => state.logged);
  const navigate = useNavigate();
  useEffect(() => {
    if (mystate.logged === false) {
      navigate("/userlogin");
    }
  }, []);

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{ boxShadow: "0 10px 10px 0 rgba(0,0,0,.2)" }}
        >
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              VSMS
            </Link>
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
                  <Link
                    to="/adminhome"
                    className="nav-link px-3"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="ViewAllCust"
                    className="nav-link px-3"
                  >
                    View All Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="ViewAllVehicles"
                    className="nav-link px-3"
                  >
                    View Registered Vehicles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="ViewAllSC"
                    className="nav-link px-3"
                    aria-current="page"
                  >
                    View All Service Centres
                  </Link>
                </li>
                <li>
                  <Link to="view" className="nav-link px-3">
                    View Requests
                  </Link>
                </li>
                <li className="nav-item">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Profile"
                    menuVariant="light"
                  >
                    <NavDropdown.Item>
                      <Link to="adminregistration" className="nav-link">
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

                <li>
                  <Link
                    to="/"
                    className="nav-link px-3"
                    onClick={{ mystate: false }}
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
        <div
          style={{
            backgroundColor: "grey",
            textAlign: "center",
            color: "black",
          }}
        >
          <h3>Admin Home</h3>
        </div>
        <div style={{ backgroundColor: "lightgray" }}>{DateTime()}</div>
        <br />
        <div style={{ minHeight: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
