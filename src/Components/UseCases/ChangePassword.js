import React from "react";
import { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from 'react-toastify'
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

export default function ChangePassword() {
  const init = {
    uid: "",
    pwd: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      //body: JSON.stringify(info),
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
          // server returned 1
          alert("Password changed Successfully. Try Login...");
          navigate("/userlogin");
        } else {
          // server did not return 1
          alert("Wrong credentials");
        }
      })
      .catch(function (error) {
        // handle error
        alert("Server error try later...");
      });
  };

  return (
    <div className=" back app">
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
                <div id="emailHelp" className="form-text"></div>
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
                <div id="emailHelp" className="form-text"></div>
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
