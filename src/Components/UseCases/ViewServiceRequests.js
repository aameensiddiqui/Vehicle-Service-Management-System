import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ViewServiceRequests() {
  const [centers, setCenters] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/serviceCenters")
      .then((resp) => resp.json())
      .then((jsonData) => setCenters(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = async () => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: true,
        }),
      });
      if (response.ok) {
        alert("Approved Request Successfully !");
        navigate("/adminHome");
      } else {
        alert("Approved Request Failed.");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">All Requests :</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, index) => (
              <tr key={index}>
                <td>{center.loginid}</td>
                <td>{center.userid}</td>
                <td>{center.status ? "Approved" : "Need Action"}</td>
                <td>
                  {!center.status && (
                    <Button
                      variant="success"
                      onClick={() => {
                        setId(center.loginid);
                        handleSubmit();
                      }}
                    >
                      Approve
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
