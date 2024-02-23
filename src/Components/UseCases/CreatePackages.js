import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePackages() {
  const [facilities, setFacilities] = useState([]);
  const [obj2, setObj2] = useState({});
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const data = localStorage.getItem("loginid");
  const [packageData, setPackageData] = useState({});
  const [formData, setFormData] = useState({
    packagename: "",
    cost: "",
  });

  const init = {
    packagename: { value: "", error: "", valid: false, touched: false },
    cost: { value: "", error: "", valid: false, touched: false },
    facilities: [],
  };
  const navigate = useNavigate();
  useEffect(() => {
    var scid = localStorage.getItem("scid");
    fetch("http://localhost:8080/getfacilities")
      .then((resp) => resp.json())
      .then((jsonData) => {
        setFacilities(jsonData);
        console.log(jsonData);
      })
      .catch((e) => console.log(e));

    fetch("http://localhost:8080/getScDetailsByLoginid?loginid=" + data)
      .then((resp) => resp.json())
      .then((jsonData) => {
        setObj2(jsonData);
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    const obj = {
      packagename: formData.packagename,
      cost: formData.cost,
      facilities: selectedFacilities,
      servicecenter: obj2,
    };
    const reqOptions = {
      method: "POST",
      'Origin': 'http://localhost:3000',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj)
    };

    fetch("http://localhost:8080/addPackageDetails", reqOptions)
      .then((resp) => resp.json())
      .then((obj) => {
        setPackageData(obj);
        navigate("/serviceHome/viewPackages")
      })
      .catch((e) => {
        alert("Creating Package Failed...!");
        navigate("/serviceHome/viewPackages")
        console.log(e);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const facilityId = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedFacilities([...selectedFacilities, facilityId]);
    } else {
      setSelectedFacilities(selectedFacilities.filter((id) => id !== facilityId));
    }
  };

  const handleReset = () => {
    setFormData(init);
    setSelectedFacilities([]);
  };

  return (
    <div className="container">
      <h3>Create Package</h3>
      <form onSubmit={sendData}>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>Package Name</td>
              <td>
                <input
                  type="text"
                  name="packagename"
                  value={formData.packagename}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Package Cost</td>
              <td>
                <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td>Select Facilities</td>
              <td>
                {facilities.map((f, index) => (
                  <div key={index} className="form-check">
                    <input
                      type="checkbox"
                      value={f.facilityid}
                      onChange={handleCheckboxChange}
                      className="form-check-input"
                    />
                    <label className="form-check-label">{f.facilityname}</label>
                  </div>
                ))}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center">
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
