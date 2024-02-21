import React, { useState, useEffect } from 'react';

function ViewAllVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7001/api/AllVehicles/GetVehicles", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setVehicles(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Vehicle ID</th>
            <th>Vehicle Number</th>
            <th>Model</th>
            <th>Fuel Type</th>
            <th>Registration Year</th>
            <th>Brand ID</th>
            <th>Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.vehicleid}>
              <td>{vehicle.vehicleid}</td>
              <td>{vehicle.vehiclenumber}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.fueltype}</td>
              <td>{vehicle.registrationyear}</td>
              <td>{vehicle.brandid}</td>
              <td>{vehicle.customerid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllVehicles;
