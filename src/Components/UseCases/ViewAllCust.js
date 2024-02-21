import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewAllCust() {
  const [customers, setCustomers] = useState([]);
  let navigate = useNavigate();
  //const mystate = useSelector((state) => state.logged);

  // useEffect(() => {
  //   if (mystate.logged === false) {
  //     navigate("/userlogin");
  //   }
  // }, [mystate.logged, navigate]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/getActiveEmployees", {
  //     method: 'GET',
  //     headers: {'content-type': 'application/json'},
  //   })
  //   .then(resp => resp.json())
  //   .then(obj => {
  //     setOriginalRecords(obj);
  //     setFilteredRecords(obj);
  //   });
  // }, []);

  useEffect(() => {
    fetch("https://localhost:7001/api/AllCustomers/GetCustomers", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((obj) => {
        console.log(obj);
        setCustomers(obj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <table className="table table-borderedA table-hover">
        <thead className="table-dark">
          <tr>
            <th className="fs-6 fw-medium">CustomerId</th>
            <th className="fs-6 fw-medium">FirstName</th>
            <th className="fs-6 fw-medium">LastName</th>
            <th className="fs-6 fw-medium">BirthDate</th>
            <th className="fs-6 fw-medium">EmailId</th>
            <th className="fs-6 fw-medium">Address</th>
            <th className="fs-6 fw-medium">ContactNo</th>
            {/* <th className="fs-6 fw-medium">Area</th>
              <th className="fs-6 fw-medium">Ratings</th>
              <th className="fs-6 fw-medium">Vehicles</th> */}
          </tr>
        </thead>
        <tbody>
          {customers.map((v) => {
            return (
              <tr key={v.empId}>
                <td className="fs-6">{v.customerid}</td>
                <td className="fs-6">{v.firstname}</td>
                <td className="fs-6">{v.lastname}</td>
                <td className="fs-6">{v.birthdate}</td>
                <td className="fs-6">{v.emailid}</td>
                <td className="fs-6">{v.lane}</td>
                <td className="fs-6">{v.contactno}</td>
                {/* <td className="fs-6">{v.area}</td>
                <td className="fs-6">{v.ratings}</td>
                <td className="fs-6">{v.vehicles}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllCust;
