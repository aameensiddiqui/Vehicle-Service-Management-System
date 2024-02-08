import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleIdError, setRoleIdError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form validation logic goes here
    // If form is valid, handle submission
  };

  const handleReset = () => {
    setUserId("");
    setRoleId("");
    setPassword("");
    setUserIdError("");
    setRoleIdError("");
    setPasswordError("");
  };

  return (
    <div className="container">
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
                      userIdError && "is-invalid"
                    }`}
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                  />
                  {userIdError && (
                    <div className="invalid-feedback">{userIdError}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="role-id">Role ID:</label>
                  <input
                    type="text"
                    id="role-id"
                    className={`form-control ${
                      roleIdError && "is-invalid"
                    }`}
                    value={roleId}
                    onChange={(event) => setRoleId(event.target.value)}
                  />
                  {roleIdError && (
                    <div className="invalid-feedback">{roleIdError}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${
                      passwordError && "is-invalid"
                    }`}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <Link to="/forgotpwd" className="nav-link px-3">
                  Forgot Password?
                </Link>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ml-2"
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
    </div>
  );
}

export default Login;
