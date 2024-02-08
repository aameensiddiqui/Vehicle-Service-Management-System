import React, { useState } from 'react';
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
                  onClick={() => {navigator("/CustomerRegPage")
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
                  onClick={() => {navigator("/ServiceCenterRegPage")
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
  export default Home;
// function Home() {
//     const mystate = useSelector((state) => state.logged);
  
//     return (
//       <div>
//         <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
//           <nav
//             className="navbar navbar-expand-lg bg-light"
            
//           >
//             <div className="container-fluid">
//               <a className="navbar-brand" href="/">
//                 VSMS
//               </a>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavDropdown"
//                 aria-controls="navbarNavDropdown"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                   <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="/">
//                       Home
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/contactus">
//                       Contact Us
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/viewservicecenters">
//                       Service Centers
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="/Login">
//                       Login
//                     </a>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       id="navbarDropdownMenuLink"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       SignUp
//                     </a>
//                     <ul
//                       className="dropdown-menu"
//                       aria-labelledby="navbarDropdownMenuLink"
//                     >
//                       <li>
//                         <a className="dropdown-item" href="/customerregistration">
//                           User
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           href="/servicecenterregistration"
//                         >
//                           Service Center
//                         </a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//         </div>
//          );
//            };
//            export default Home;
