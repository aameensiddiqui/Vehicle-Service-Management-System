/*
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slice";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const navigate = useNavigate();
  const reduxAction = useDispatch();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userId === "") {
      setUserIdError("Please enter your user ID");
      return;
    } else if (userId.length < 3) {
      setUserIdError("User ID must be at least 3 characters long");
      return;
    } else {
      setUserIdError("");
    }

    if (password === "") {
      setPasswordError("Please enter your password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError(
        "Password must contain at least one special character (!@#$%^&*)"
      );
      return;
    } else {
      setPasswordError("");
    }

    if (
      userId !== "" &&
      password !== "" &&
      userId.length >= 3 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      const params = {
        userid: userId,
        password: password,
      };
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(params),
      };
      fetch("http://localhost:8080/logincheck", reqOptions)
        .then((resp) => resp.json())
        .then((jsonData) => {
          localStorage.setItem("loginid", JSON.stringify(jsonData.loginid));
          console.log(jsonData);
          if (jsonData.roleid.roleid === 1) {
            reduxAction(login());
            navigate("/customerhome");
          } else if (jsonData.roleid.roleid === 2) {
            if (jsonData.status.status === 0) {
             
              setUserIdError("Login failed. Your account is not verified yet. Please try again later.");
            } else {
              reduxAction(login());
              navigate("/serviceHome");
            }
          } else if (jsonData.roleid.roleid === 3) {
            reduxAction(login());
            navigate("/adminHome");
          }
        })
        .catch((e) => {
          console.log(e);
          setUserIdError("Login in failed. Please check your username and password and try again.");
        });
      // Handle form submission
      console.log("User ID:", userId);
      console.log("Password:", password);
    }
  };

  const handleReset = () => {
    setUserId("");
    setPassword("");
    setUserIdError("");
    setPasswordError("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="user-id">User ID:</label>
                  <input
                    type="text"
                    id="user-id"
                    className={`form-control ${
                      userIdError !== "" && "is-invalid"
                    }`}
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                  />
                  {userIdError && (
                    <div className="invalid-feedback">{userIdError}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${
                      passwordError !== "" && "is-invalid"
                    }`}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <Link to="/forgotpwd" className="nav-link">
                  Forget Password?
                </Link>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {userIdError && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "5px",
            color: "white",
            zIndex: 9999,
          }}
        >
          {userIdError}
        </div>
      )}
    </div>
  );
}

export default LoginPage;

*/
/************************************************************************************************************************************************************************* */


// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../slice";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Notification from "../Notification";

// function LoginPage() {
//   const navigate = useNavigate();
//   const reduxAction = useDispatch();
//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginFailed, setLoginFailed] = useState(false); // State for login failed notification
//   const [userIdError, setUserIdError] = useState(""); // State for user ID validation
//   const [passwordError, setPasswordError] = useState(""); // State for password validation

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (userId === "") {
//       setUserIdError("User ID is required.");
//       return;
//     } else {
//       setUserIdError("");
//     }

//     if (password === "") {
//       setPasswordError("Password is required.");
//       return;
//     } else {
//       setPasswordError("");
//     }

//     const params = {
//       userid: userId,
//       password: password,
//     };
//     const reqOptions = {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(params),
//     };
//     fetch("http://localhost:8080/logincheck", reqOptions)
//       .then((resp) => resp.json())
//       .then((jsonData) => {
//         localStorage.setItem("loginid", JSON.stringify(jsonData.loginid));
//         console.log(JSON.stringify(jsonData));
//         if (jsonData.roleid.roleid === 1) {
//           if (jsonData.status === false) {
//             setLoginFailed(true); // Display login failed notification
//           } else {
//             reduxAction(login());
//             navigate("/customerhome");
//           }
//         } else if (jsonData.roleid.roleid === 2) {
//           if (jsonData.status === false) {
//             setLoginFailed(true); // Display login failed notification
//           } else {
//             reduxAction(login());
//             navigate("/serviceHome");
//           }
//         } else if (jsonData.roleid.roleid === 3) {
//           reduxAction(login());
//           navigate("/adminHome");
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//         setLoginFailed(true); // Display login failed notification
//       });
//   };

//   const handleReset = () => {
//     setUserId("");
//     setPassword("");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title mb-4 text-Dark">Login</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label className="text-Dark" htmlFor="user-id">
//                     User ID:
//                   </label>
//                   <input
//                     type="text"
//                     id="user-id"
//                     className="form-control"
//                     value={userId}
//                     onChange={(event) => setUserId(event.target.value)}
//                     placeholder="Please enter User-ID"
//                   />
//                   {userIdError && (
//                     <div className="text-danger">{userIdError}</div>
//                   )}
//                 </div>
//                 <div className="form-group">
//                   <label className="text-Dark" htmlFor="password">
//                     Password:
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                     placeholder="Enter your Password"
//                   />
//                   {passwordError && (
//                     <div className="text-danger">{passwordError}</div>
//                   )}
//                   {!/[A-Z]/.test(password) && password !== "" && (
//                     <div className="text-muted">
//                       Password must contain at least one capital letter
//                     </div>
//                   )}
//                   {!/\d/.test(password) && password !== "" && (
//                     <div className="text-muted">
//                       Password must contain at least one number
//                     </div>
//                   )}
//                   {!/[!@#$%^&*]/.test(password) && password !== "" && (
//                     <div className="text-muted">
//                       Password must contain at least one special character
//                       (!@#$%^&*)
//                     </div>
//                   )}
//                 </div>
//                 <Link to="/forgotpwd" className="nav-link text-muted">
//                   Forget Password?
//                 </Link>
//                 <div className="form-group mt-3">
//                   <button type="submit" className="btn btn-primary mr-2">
//                     Submit
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={handleReset}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {loginFailed && (
//         <Notification
//           message="Login failed. Please check your username and password and try again."
//           type="error"
//           onClose={() => setLoginFailed(false)}
//         />
//       )}
//       <div className="mt-3 text-center">
//         Don’t have an account? Create one now! as a{" "}
//         <Link to="/CustRegistration" className="ml-1">
//           User
//         </Link>{" "}
//         <span className="mx-1">|</span>{" "}
//         <Link to="/ServRegistration" className="mr-1">
//           Service Center
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slice";
import "bootstrap/dist/css/bootstrap.min.css";
import Notification from "../Notification";

function LoginPage() {
  const navigate = useNavigate();
  const reduxAction = useDispatch();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false); // State for login failed notification
  const [userIdError, setUserIdError] = useState(""); // State for user ID validation
  const [passwordError, setPasswordError] = useState(""); // State for password validation
  const [notificationMessage, setNotificationMessage] = useState(""); // State for notification message

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userId === "") {
      setUserIdError("User ID is required.");
      return;
    } else {
      setUserIdError("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
      return;
    } else {
      setPasswordError("");
    }

    const params = {
      userid: userId,
      password: password,
    };
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params),
    };
    fetch("http://localhost:8080/logincheck", reqOptions)
      .then((resp) => resp.json())
      .then((jsonData) => {
        localStorage.setItem("loginid", JSON.stringify(jsonData.loginid));
        console.log(JSON.stringify(jsonData));
        if (jsonData.roleid.roleid === 1) {
          if (jsonData.status === false) {
            setLoginFailed(true); // Display login failed notification
            setNotificationMessage("Your account is inactive");
          } else {
            reduxAction(login());
            navigate("/customerhome");
          }
        } else if (jsonData.roleid.roleid === 2) {
          if (jsonData.status === false) {
            setLoginFailed(true); // Display login failed notification
            setNotificationMessage("Your account is either deactivated or not verified yet");
          } else {
            reduxAction(login());
            navigate("/serviceHome");
          }
        } else if (jsonData.roleid.roleid === 3) {
          reduxAction(login());
          navigate("/adminHome");
        }
      })
      .catch((e) => {
        console.log(e);
        setLoginFailed(true); // Display login failed notification
        setNotificationMessage("An error occurred while logging in. Please try again later.");
      });
  };

  const handleReset = () => {
    setUserId("");
    setPassword("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4 text-Dark">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="text-Dark" htmlFor="user-id">
                    User ID:
                  </label>
                  <input
                    type="text"
                    id="user-id"
                    className="form-control"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                    placeholder="Please enter User-ID"
                  />
                  {userIdError && (
                    <div className="text-danger">{userIdError}</div>
                  )}
                </div>
                <div className="form-group">
                  <label className="text-Dark" htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your Password"
                  />
                  {passwordError && (
                    <div className="text-danger">{passwordError}</div>
                  )}
                  {!/[A-Z]/.test(password) && password !== "" && (
                    <div className="text-muted">
                      Password must contain at least one capital letter
                    </div>
                  )}
                  {!/\d/.test(password) && password !== "" && (
                    <div className="text-muted">
                      Password must contain at least one number
                    </div>
                  )}
                  {!/[!@#$%^&*]/.test(password) && password !== "" && (
                    <div className="text-muted">
                      Password must contain at least one special character
                      (!@#$%^&*)
                    </div>
                  )}
                </div>
                <Link to="/forgotpwd" className="nav-link text-muted">
                  Forget Password?
                </Link>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loginFailed && (
        <Notification
          message={notificationMessage}
          type="error"
          onClose={() => setLoginFailed(false)}
        />
      )}
      <div className="mt-3 text-center">
        Don’t have an account? Create one now! as a{" "}
        <Link to="/CustRegistration" className="ml-1">
          User
        </Link>{" "}
        <span className="mx-1">|</span>{" "}
        <Link to="/ServRegistration" className="mr-1">
          Service Center
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
