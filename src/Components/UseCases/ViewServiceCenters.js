import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
// import axios from "axios";

export default function ViewServiceCenters() {
  const [allarea, setAllarea] = useState([]);
  const [allbrands, setAllbrands] = useState([]);
  const [allcities, setAllcities] = useState([]);
  const [cityid, setCityid] = useState(0);
  const [areaid, setAreaid] = useState(0);
  const [scid, setScid] = useState(0);
  const [brandid, setBrandid] = useState(0);
  const [pkgs, SetPkgs] = useState([]);
  const [pkgid, SetPkgid] = useState(0);
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  // code For get ratings

  const [ratings, setRatins] = useState(0);
  let servicecenterid = 3;
  const getRating = () => {
    fetch("http://localhost:8080/getRating=" + servicecenterid)
      .then((resp) => resp.json())
      .then((a) => setRatins(a));
  };
  // code end rating
  const sendData = (e) => {
    e.preventDefault();
    var url =
      "http://localhost:8080/getScByBrandArea?bid=" +
      brandid +
      "&aid=" +
      areaid;
    console.log(url);
    fetch(url)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setMsg("No Service Centers Found");
          document.getElementById("res").setAttribute("style", "display:none");
        } else {
          setData(jsonData);
          document.getElementById("res").setAttribute("style", "display:block");
          setMsg("");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAreas = () => {
    fetch("http://localhost:8080/getAreaByCityId?id=" + cityid)
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
  }, []);

  const getPackages = async () => {
    console.log("Packages");
    try {
      const resp = await axios.get(
        "http://localhost:8080/getPackageByScId?scid=" + scid
      );
      SetPkgs(resp.data);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className="container-fluid p-3 mb-5 text-black shadow rounded-2"
      style={{ minHeight: "80vh" }}
    >
      <div style={{ backgroundColor: "white" }}>
        <h3 style={{ color: "black" }}>Search Service Centers</h3>
        <hr />
        <form>
          <table className="table table table-striped">
            <tbody>
              <tr>
                <td>Select City :</td>
                <td>
                  <select
                    onChange={(e) => {
                      setCityid(e.target.value);
                    }}
                    onClick={getAreas}
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
              <tr>
                <td>Select Area :</td>
                <td>
                  <select
                    className="form-group"
                    id="areaid"
                    name="areaid"
                    onChange={(e) => {
                      setAreaid(e.target.value);
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
              <tr>
                <td>Select Brand :</td>
                <td>
                  <select
                    className="form-group"
                    id="brandid"
                    name="brandid"
                    onChange={(e) => {
                      setBrandid(e.target.value);
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
              <tr>
                <td colSpan={2}>
                  <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={sendData}
                  >
                    Search
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <span style={{ color: "red" }}>
            <h3>{msg}</h3>
          </span>

          <div id="res" style={{ display: "none" }}>
            <h3 style={{ backgroundColor: "skyblue" }}>
              Service Centers Information
            </h3>
            <hr />
            <table className="table table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Contact Number</th>
                  <th>Emailid</th>
                  <th>Address</th>
                  <th>Ratings</th>
                  {/* <th>Service Packages</th> */}
                </tr>
              </thead>

              <tbody>
                {data.map((b, index) => {
                  return (
                    <tr key={index}>
                      <td value={b.servicecenterid}>{b.scname}</td>
                      <td value={b.servicecenterid}>{b.brand.bname}</td>
                      <td value={b.servicecenterid}>{b.contactno}</td>
                      <td value={b.servicecenterid}>{b.emailid}</td>
                      <td value={b.servicecenterid}>{b.lane}</td>
                      <td value={b.servicecenterid}>Ratings</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
            <table className="table table table-striped">
              <tbody>
                <tr>
                  <td>To View More Details Please Login.</td>
                  <td>Not a Customer? Please Register.</td>
                </tr>
                <tr>
                  <td>
                    <button className="btn btn-primary">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary">
                      <a className="nav-link" href="/customerregistration">
                        Register
                      </a>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <Outlet />
      </div>
    </div>
  );
}
