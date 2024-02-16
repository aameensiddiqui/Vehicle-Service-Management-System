import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VehDetails() {
  const [vehData, setVehData] = useState([]);
  const [msg, setMsg] = useState("");
  const [showRes, setShowRes] = useState(false);

  useEffect(() => {
    var custid = JSON.parse(localStorage.getItem("custid"));
    console.log("Veh data fetch");
    fetch("http://localhost:8080/getVehiclesByCid?cid=" + custid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setMsg("No data Available - Please Register vehicle");
        } else {
          setVehData(jsonData);
          console.log("Attribute");
          console.log(jsonData);
          setShowRes(false);
          //document.getElementById("res").setAttribute("style", "display:block");
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const deleteVeh = (vid) => {
    {
      fetch("http://localhost:8080/deleteVehById?vid=" + vid)
        .then((resp) => resp.json())
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <h3>{msg}</h3>
      <div id="res" style={{ display: showRes ? "none" : "block" }}>
        <h3>Vehicle Details</h3>
        <hr />
        <table className="table table table-striped">
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Registration Year</th>
              <th>Brand</th>
              <th>Fulet Type</th>
            </tr>
          </thead>
          <tbody>
            {vehData.map((v, index) => {
              return (
                <tr key={index}>
                  <td>{v.vehiclenumber}</td>
                  <td>{v.registrationyear}</td>
                  <td>{v.brandid.bname}</td>
                  <td>{v.fueltype}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* {JSON.stringify(vehData)} */}
    </div>
  );
}
