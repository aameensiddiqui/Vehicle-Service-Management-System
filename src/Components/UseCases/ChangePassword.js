
import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const init = {
    uid: "",
    pwd: "",
    confirmPwd: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    if (info.pwd !== info.confirmPwd) {
      alert("Passwords do not match!");
      return;
    }

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
    };

    fetch(
      "http://localhost:8080/changePwd?userid=" +
        info.uid +
        "&newPwd=" +
        info.pwd,
      reqOptions
    )
      .then(function (response) {
        if (response.status === 200) {
          alert("Password changed Successfully. Try Login...");
          navigate("/Login");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch(function (error) {
        alert("Server error try later...");
      });
  };

  return (
    <div className="back app">
      <h3 className="title" style={{ textAlign: "center", paddingBottom: 30 }}>
        Change Password
      </h3>
      <form>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="uid" className="form-label">
                  Enter Uid:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uid"
                  name="uid"
                  size="sm"
                  value={info.uid}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "uid",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter uid"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Enter New Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  name="pwd"
                  size="sm"
                  value={info.pwd}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "pwd",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter New Password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPwd" className="form-label">
                  Confirm New Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPwd"
                  name="confirmPwd"
                  size="sm"
                  value={info.confirmPwd}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "confirmPwd",
                      val: e.target.value,
                    })
                  }
                  placeholder="Confirm New Password"
                />
              </div>

              <Button
                color="primary"
                type="submit"
                onClick={(e) => {
                  sendData(e);
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                type="reset"
                className="ms-4"
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    </div>
  );
}


/*
import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ChangePassword({ loggedInUserId }) {
  // Pass loggedInUserId as prop
  const init = {
    uid: "",
    pwd: "",
    confirmPwd: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();
    if (info.pwd !== info.confirmPwd) {
      alert("Passwords do not match!");
      return;
    }

    if (info.uid !== loggedInUserId) {
      // Check if entered userid matches loggedInUserId
      alert("Userid does not match with logged-in user!");
      return;
    }

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
    };

    fetch(
      "http://localhost:8080/changePwd?userid=" +
        info.uid +
        "&newPwd=" +
        info.pwd,
      reqOptions
    )
      .then(function (response) {
        if (response.status === 200) {
          alert("Password changed Successfully. Try Login...");
          navigate("/Login");
        } else {
          alert("Wrong credentials");
        }
      })
      .catch(function (error) {
        alert("Server error try later...");
      });
  };

  return (
    <div className="back app">
      <h3 className="title" style={{ textAlign: "center", paddingBottom: 30 }}>
        Change Password
      </h3>
      <form>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="uid" className="form-label">
                  Enter Uid:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uid"
                  name="uid"
                  size="sm"
                  value={info.uid}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "uid",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter uid"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Enter New Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  name="pwd"
                  size="sm"
                  value={info.pwd}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "pwd",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter New Password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPwd" className="form-label">
                  Confirm New Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPwd"
                  name="confirmPwd"
                  size="sm"
                  value={info.confirmPwd}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "confirmPwd",
                      val: e.target.value,
                    })
                  }
                  placeholder="Confirm New Password"
                />
              </div>

              <Button
                color="primary"
                type="submit"
                onClick={(e) => {
                  sendData(e);
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                type="reset"
                className="ms-4"
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    </div>
  );
}
*/
/*
import React, { useState } from 'react';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'currentPassword') setCurrentPassword(value);
    else if (name === 'newPassword') setNewPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password don't match.");
      return;
    }
    // Your password change logic goes here
    setMessage('Password changed successfully.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;*/
