import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function VehRegistration() {
  const init = {
    customerid: localStorage.getItem("custid"),
    number: { value: "", error: "", valid: false, touched: false },
    running: { value: "", error: "", valid: false, touched: false },
    model: { value: "", error: "", valid: false, touched: false },
    regyear: { value: "", error: "", valid: false, touched: false },
    brandid: 0,
    fueltype: { value: "", error: "", valid: false, touched: false },
  };

  const fueltypes = [
    { id: 1, fueltype: "Petrol" },
    { id: 2, fueltype: "Diesel" },
    { id: 3, fueltype: "CNG" },
  ];

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
  const [allbrands, setAllbrands] = useState([]);
  const [fueltype, setFueltype] = useState("");
  const [brandid, setBrandid] = useState(0);
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const validate = (nm, val) => {
    let error = "";
    let touched = true;
    let valid = false;
    switch (nm) {
      case "brandid":
        console.log(brandid);
        const exp1 = /^[0]$/;
        if (!exp1.test(val)) {
          error = "Invalid Choice";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "running":
        const exp5 = /^[0-9]{1,}$/;
        if (!exp5.test(val)) {
          error = "Invalid Input";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "regyear":
        const exp2 = /^[0-9]{4}$/;
        if (!exp2.test(val)) {
          error = "Write Valid Year";
        } else {
          error = "";
          valid = true;
        }
        break;

      case "model":
        error = "";
        valid = true;
        break;

      case "fueltype":
        if (val.equals("Petrol")) {
          error = "";
          valid = true;
        } else if (val.equals("Diesel")) {
          error = "";
          valid = true;
        } else if (val.equals("CNG")) {
          error = "";
          valid = true;
        } else {
          error = "Please Select Valid Options";
          valid = true;
        }
        break;

      case "number":
        const exp6 = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
        if (!exp6.test(val)) {
          error = "Write in Capital Letters with no space";
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
    // console.log(info);
    // console.log("Brand id-" + brandid);
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };
    fetch("http://localhost:8080/registervehicle", reqOptions)
      .then((resp) => {
        resp.json();
        if (resp.status === 200) {
          alert("Vehicle Information Added.");
          navigate("/customerhome");
        } else {
          window.location.reload();
          alert("Registration Failed.");
        }
      })
      .then((obj) => console.log(JSON.stringify(obj)));
  };

  useEffect(() => {
    fetch("http://localhost:8080/getBrands")
      .then((resp) => resp.json())
      .then((c) => setAllbrands(c));
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Vehicle Registration</h2>
        <form>
          <table className="table table table-striped">
            <tbody>
              <tr className="form-group">
                <td>
                  <label htmlFor="brandid"> Select Brand</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="brandid"
                    name="brandid"
                    onChange={(e) =>
                      dispatch({
                        type: "update",
                        fld: "brandid",
                        value: e.target.value,
                      })
                    }
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
                  {/* <div
                    className="form-text"
                    style={{
                      display:
                        !info.brandid.valid && info.brandid.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.brandid.error}
                  </div> */}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="number">
                    Vehicel Number : (e.g.MH13CN5962)
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Enter Vehicle Number"
                    name="number"
                    value={info.number.value}
                    onChange={(e) => {
                      validate("number", e.target.value);
                    }}
                  />
                  <div
                    className="form-text"
                    style={{
                      display:
                        !info.number.valid && info.number.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.number.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="model">Model :</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    placeholder="Enter Model Details"
                    name="model"
                    value={info.model.value}
                    onChange={(e) => {
                      validate("model", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.model.valid && info.model.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.model.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="fueltype"> Select Fuel Type :</label>
                </td>
                <td>
                  <select
                    className="form-group"
                    id="fueltype"
                    name="fueltype"
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "fueltype",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option>Select One</option>
                    {fueltypes.map((f) => {
                      return (
                        <option value={f.fueltype} key={f.fueltype}>
                          {f.fueltype}
                        </option>
                      );
                    })}
                  </select>
                  {/* <div
                    className="form-text"
                    style={{
                      display:
                        !info.fueltype.valid && info.fueltype.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.fueltype.error}
                  </div> */}
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="reyear"> Registration Year :</label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Registration Year"
                    id="regyear"
                    name="regyear"
                    value={info.regyear.value}
                    onChange={(e) => {
                      validate("regyear", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.regyear.valid && info.regyear.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.regyear.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td>
                  <label htmlFor="running">
                    Current Vehicle Running (Kilometer) :
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    id="running"
                    placeholder="Enter Travelled Distance"
                    name="running"
                    value={info.running.value}
                    onChange={(e) => {
                      validate("running", e.target.value);
                    }}
                  />
                  <div
                    id="emailHelp"
                    className="form-text"
                    style={{
                      display:
                        !info.running.valid && info.running.touched
                          ? "block"
                          : "none",
                    }}
                  >
                    {info.running.error}
                  </div>
                </td>
              </tr>
              <tr className="form-group">
                <td style={{ textAlign: "right" }}>
                  <hr />
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
                <td style={{ textAlign: "left" }}>
                  <hr />
                  <button
                    type="reset"
                    className="btn btn-secondary mb-3"
                    onClick={() => {
                      dispatch({ type: "reset" });
                    }}
                  >
                    Reset
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
