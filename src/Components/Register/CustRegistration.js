
import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CustRegistration() {
  const init = {
    fname: { value: "", error: "", valid: false, touched: false },
    lname: { value: "", error: "", valid: false, touched: false },
    contactno: { value: "", error: "", valid: false, touched: false },
    emailid: { value: "", error: "", valid: false, touched: false },
    cityid: 0,
    areaid: 0,
    questionid: 0,
    roleid: 1,
    answer: { value: "", error: "", valid: false, touched: false },
    lane: { value: "", error: "", valid: false, touched: false },
    pincode: { value: "", error: "", valid: false, touched: false },
    birthdate: { value: "", error: "", valid: false, touched: false },
    userid: { value: "", error: "", valid: false, touched: false },
    password: { value: "", error: "", valid: false, touched: false },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          [action.data.key]: {
            ...state[action.data.key],
            value: action.data.val,
            touched: action.data.touched,
            valid: action.data.valid,
            error: action.data.error,
          },
          formValid: action.data.formValid,
        };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);
  const [allarea, setAllarea] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [allques, setAllques] = useState([]);
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const validate = (nm, val) => {
    let error = "";
    let valid = false;
    let touched = true;
    switch (nm) {
      case "email":
        const exp1 = /^[a-z0-9]{3,}@[a-z]{3,12}\.[a-z]{2,}$/;

        if (!exp1.test(val)) {
          error = "Invalid Email";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "password":
        const exp2 =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!exp2.test(val)) {
          error =
            "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "fname":
        const exp3 = /^[\w]{3,}$/;
        if (!exp3.test(val)) {
          error = "Atleast 3 Charaters";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "lname":
        const exp4 = /^[\w]{3,}$/;
        if (!exp4.test(val)) {
          error = "Atleast 3 Charaters";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "regno":
        const exp5 = /^[\w]{3,}$/;
        if (!exp5.test(val)) {
          error = "Invalid";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "contactno":
        const exp6 = /^[0-9]{10}$/;
        if (!exp6.test(val)) {
          error = "Invalid Contact Number";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "addressline":
        const exp7 = /[\w]{4,}$/;
        if (!exp7.test(val)) {
          error = "Invalid";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "ans":
        const exp8 = /[\w]{3,}$/;
        if (!exp8.test(val)) {
          error = "Invalid";
        } else {
          error = "";
          valid = true;
        }
        break;
    }

    //console.log(val + "," + error + "," + valid);
    dispatch({ type: "update", fld: nm, value: val, error, valid, touched });
  };

  const senddata = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/registercustomer", reqOptions)
      .then((resp) => {
        resp.json();
        console.log(resp.status);
        if (resp.status === 200) {
          //resp.json();
          alert("Registration Successful...!");
          navigate("/login");
        } else {
          alert("Registration Failed.");
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Registration Failed.");
        window.location.reload();
      });
  };

  const getAreas = (id) => {
    fetch("http://localhost:8080/getAreaByCityId?id=" + id)
      .then((resp) => resp.json())
      .then((a) => setAllarea(a));
  };

  useEffect(() => {
    fetch("http://localhost:8080/getCities")
      .then((resp) => resp.json())
      .then((c) => setAllcities(c));

    fetch("http://localhost:8080/getQuestions")
      .then((resp) => resp.json())
      .then((q) => setAllques(q));
  }, []);

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="container-fluid p-3 mb-3 text-black shadow rounded-4"
    >
      <div className="container-fluid">
        <form>
          <table className="table table table-striped">
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3>Customer Registration</h3>
                  <hr />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="form-group">
                <td>
                  <label htmlFor="fname">First Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Enter First name"
                    name="fname"
                    value={info.fname.value}
                    onChange={(e) => {
                      validate("fname", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.fname.valid && info.fname.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.fname.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="fname">Last Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Enter Lasts name"
                    name="lname"
                    value={info.lname.value}
                    onChange={(e) => {
                      validate("lname", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.lname.valid && info.lname.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.lname.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="fname">Birthdate:</label>
                </td>
                <td>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    placeholder="Enter fname name"
                    name="birthdate"
                    value={info.fname.value}
                    onChange={(e) => {
                      validate("birthdate", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.birthdate.valid && info.birthdate.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.birthdate.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="contactno">Contact Number.:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="contactno"
                    placeholder="Enter Contact number"
                    name="contactno"
                    value={info.contactno.value}
                    onChange={(e) => {
                      validate("contactno", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.contactno.valid && info.contactno.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.contactno.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="emailid">Email ID:</label>
                </td>
                <td>
                  <input
                    type="emailid"
                    className="form-control"
                    id="emailid"
                    placeholder="Enter Emailid"
                    name="emailid"
                    value={info.emailid.value}
                    onChange={(e) => {
                      validate("emailid", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.emailid.valid && info.emailid.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.emailid.error}
                  </div>
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
                  <label htmlFor="lane"> Address:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="lane"
                    placeholder="Enter Address"
                    name="lane"
                    value={info.lane.value}
                    onChange={(e) => {
                      validate("lane", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.lane.valid && info.lane.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.lane.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="pincode"> Pincode :</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Enter Pincode"
                    name="pincode"
                    value={info.pincode.value}
                    onChange={(e) => {
                      validate("pincode", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.pincode.valid && info.pincode.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.pincode.error}
                  </div>
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
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "questionid",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {allques.map((q) => {
                      return (
                        <option value={q.questionid} key={q.questionid}>
                          {q.questiontext}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="answer"> Answer</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="answer"
                    placeholder="Enter Answer"
                    name="answer"
                    value={info.answer.value}
                    onChange={(e) => {
                      validate("answer", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.answer.valid && info.answer.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.answer.error}
                  </div>
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
                    placeholder="Enter userid"
                    name="userid"
                    value={info.userid.value}
                    onChange={(e) => {
                      validate("userid", e.target.value);
                    }}
                  />

                  <p
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.userid.valid && info.userid.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.userid.error}
                  </p>
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
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    value={info.password.value}
                    onChange={(e) => {
                      validate("password", e.target.value);
                    }}
                  />

                  <p
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.password.valid && info.password.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.password.error}
                  </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="password">Re-enter Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Re-enter password"
                    name="password"
                    value={info.password.value}
                    onChange={(e) => {
                      validate("password", e.target.value);
                    }}
                  />

                  <p
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.password.valid && info.password.touched
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.password.error}
                  </p>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={(e) => {
                      senddata(e);
                    }}
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


