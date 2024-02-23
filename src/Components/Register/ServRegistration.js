import React, { useEffect, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ServRegistration() {
  // const[question,setQuestion] = useState(0);

  const [allarea, setAllarea] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [allques, setAllques] = useState([]);
  const [allbrands, setAllbrands] = useState([]);
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const init = {
    scname: "",
    bookinglimit: "",
    contactno: "",
    emailid: "",
    cityid: 0,
    areaid: 0,
    questionid: 1,
    roleid: 2,
    answer: "",
    lane: "",
    pincode: "",
    userid: "",
    password: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          [action.fld]: action.value,
        };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);

  const getAreas = (id) => {
    fetch("http://localhost:8080/getAreaByCityId?id=" + id)
      .then((resp) => resp.json())
      .then((a) => setAllarea(a));
  };

  useEffect(() => {
    fetch("http://localhost:8080/getBrands")
      .then((resp) => resp.json())
      .then((c) => setAllbrands(c));

    fetch("http://localhost:8080/getCities")
      .then((resp) => resp.json())
      .then((c) => setAllcities(c));

    fetch("http://localhost:8080/getQuestions")
      .then((resp) => resp.json())
      .then((q) => setAllques(q));
  }, []);

  const validate = (fieldName, value) => {
    if (value.trim() === "") {
      return true; // Field is empty, no need to validate
    }

    switch (fieldName) {
      case "fname":
        return /^[\w]{3,}$/.test(value);
      case "lname":
        return /^[\w]{3,}$/.test(value);
      case "regno":
        return /^[\w]{3,}$/.test(value);
      case "contactno":
        return /^[0-9]{10}$/.test(value);
      // case "addressline":
      // return /[\w]{4,}$/.test(value);
      case "pincode":
        return /^[1-9][0-9]{5}$/.test(value);
      case "emailid":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      // case "userid":
      // 	return /^[a-zA-Z0-9_]+$/.test(value);
      // case "answer":
      // return /^[a-zA-Z]+$/.test(value);
      case "password":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      case "reEnterPassword":
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      default:
        return true;
    }
  };

  const handleFieldChange = (fieldName, value) => {
    // Validate the field value
    const isValid = validate(fieldName, value);

    // Dispatch an action to update the state
    dispatch({
      type: "update",
      fld: fieldName,
      value: value,
    });

    // Return the validity of the field for further use
    return isValid;
  };

  const senddata = (e) => {
    console.log(info);
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/registerservicecenter", reqOptions)
      .then((resp) => {
        resp.json();
        if (resp.status === 200) {
          alert("Registration Successful...!");
          navigate("/login");
        } else alert("Registration Failed");
      })
      .then((obj) => console.log(JSON.stringify(obj)));
  };

  const navigator = useNavigate();

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container-fluid p-3 mb-5 text-black shadow rounded-2">
        <h2 style={{ textAlign: "center", marginTop: "70px" }}>
          Service Center Registration
        </h2>

        <form>
          <table className="table table-striped">
            <thead></thead>

            <tbody>
              <tr className="form-group">
                <td>
                  <label htmlFor="cityid"> Select Brand</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="brandid"
                    name="brandid"
                    onChange={(e) => {
                      handleFieldChange("brandid", e.target.value);
                      dispatch({
                        type: "update",
                        fld: "brandid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allbrands.map((b) => {
                      return (
                        <option value={b.brandid} key={b.brandid}>
                          {b.bname}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="fname">Service Center Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="scname"
                    placeholder="Enter First name"
                    name="scname"
                    value={info.scname}
                    onChange={(e) =>
                      handleFieldChange("scname", e.target.value)
                    }
                  />
                  {!validate("scname", info.scname) && (
                    <div className="form-text text-danger">
                      Name should start with a capital letter.
                    </div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="birthdate">Booking Limit:</label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="bookinglimit"
                    placeholder="Enter Booking Limit"
                    name="bookinglimit"
                    value={info.bookinglimit}
                    onChange={(e) =>
                      handleFieldChange("bookinglimit", e.target.value)
                    }
                  />
                  {!validate("bookinglimit", info.bookinglimit) && (
                    <div className="form-text text-danger">
                      Must be a number
                    </div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="contactno">Contact Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="contactno"
                    placeholder="Enter Contact number"
                    name="contactno"
                    value={info.contactno}
                    onChange={(e) =>
                      handleFieldChange("contactno", e.target.value)
                    }
                  />
                  {!validate("contactno", info.contactno) && (
                    <div className="form-text text-danger">
                      Contact Number should be of 10 digits.
                    </div>
                  )}
                </td>
              </tr>
              {/* Add other form fields similarly */}
              <tr className="form-group">
                <td>
                  <label htmlFor="emailid">Email ID:</label>
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    id="emailid"
                    placeholder="Enter Emailid"
                    name="emailid"
                    value={info.emailid}
                    onChange={(e) =>
                      handleFieldChange("emailid", e.target.value)
                    }
                  />
                  {!validate("emailid", info.emailid) && (
                    <div className="form-text text-danger">
                      {" "}
                      Please enter a valid email address.
                    </div>
                  )}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="cityid"> Select City</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="cityid"
                    name="cityid"
                    onChange={(e) => {
                      getAreas(e.target.value);
                      dispatch({
                        type: "update",
                        fld: "cityid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allcities.map((city) => {
                      return (
                        <option value={city.cityid} key={city.cityid}>
                          {city.cityname}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="areaid"> Select Area</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="areaid"
                    name="areaid"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "areaid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allarea.map((area) => {
                      return (
                        <option value={area.areaid} key={area.areaid}>
                          {area.areaname}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="lane">Address:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="lane"
                    placeholder="Enter Address"
                    name="lane"
                    value={info.lane}
                    onChange={(e) => handleFieldChange("lane", e.target.value)}
                  />
                  {!validate("addressline", info.lane) && (
                    <div className="form-text text-danger">
                      Invalid Address.
                    </div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="pincode">Pincode:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Enter Pincode"
                    name="pincode"
                    value={info.pincode}
                    onChange={(e) =>
                      handleFieldChange("pincode", e.target.value)
                    }
                  />
                  {!validate("pincode", info.pincode) && (
                    <div className="form-text text-danger">
                      Pincode must be of 6 digits.
                    </div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="questionid"> Select Security Question</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="questionid"
                    name="questionid"
                    value={info.questionId}
                  >
                    <option>Select One</option>
                    {allques.map((q) => {
                      return (
                        <option
                          value={q.questionid}
                          key={q.questionid}
                          onChange={(e) => {
                            handleFieldChange("questionid", e.target.value);
                            dispatch({
                              type: "update",
                              fld: "questionid",
                              value: e.target.value,
                            });
                          }}
                        >
                          {q.questiontext}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="answer">Answer:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="answer"
                    placeholder="Enter Answer"
                    name="answer"
                    value={info.answer}
                    onChange={(e) =>
                      handleFieldChange("answer", e.target.value)
                    }
                  />
                  {!validate("answer", info.answer) && (
                    <div className="form-text text-danger">Write Answer.</div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="userid">User ID:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="userid"
                    placeholder="Enter User ID"
                    name="userid"
                    value={info.userid}
                    onChange={(e) =>
                      handleFieldChange("userid", e.target.value)
                    }
                  />
                  {!validate("userid", info.userid) && (
                    <div className="form-text text-danger">
                      Invalid User ID.
                    </div>
                  )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <label htmlFor="password">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                    value={info.password}
                    onChange={(e) =>
                      handleFieldChange("password", e.target.value)
                    }
                  />
                  {!validate("password", info.password) && (
                    <div className="form-text text-danger">
                      Password must be 8+ characters with at least one
                      uppercase, one lowercase, one digit, and one special
                      character.
                    </div>
                  )}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="reEnterPassword">Re-enter Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    className="form-control"
                    id="reEnterPassword"
                    placeholder="Re-enter Password"
                    name="reEnterPassword"
                    value={info.reEnterPassword}
                    onChange={(e) =>
                      handleFieldChange("reEnterPassword", e.target.value)
                    }
                  />
                  {info.password !== info.reEnterPassword &&
                    info.reEnterPassword !== "" &&
                    info.password !== "" && (
                      <div className="form-text text-danger">
                        Passwords do not match.
                      </div>
                    )}
                </td>
              </tr>

              <tr className="form-group">
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={senddata}
                  >
                    Submit
                  </button>
                </td>
                <td>
                  <button
                    type="reset"
                    className="btn btn-primary mb-3"
                    onClick={() => {
                      dispatch({ type: "reset" });
                    }}
                  >
                    clear
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
