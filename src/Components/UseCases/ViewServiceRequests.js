/*
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
*/

/*
// -------------------------------------------
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

  const handleApprove = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: true, // Approve: Set status to 1
        }),
      });
      if (response.ok) {
        alert("Approved Request Successfully !");
        window.location.reload(); 
      } else {
        alert("Approved Request Failed.");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleReject = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: false, // Reject: Set status to 0
        }),
      });
      if (response.ok) {
        alert("Rejected Request Successfully !");
        navigate("/adminHome");
      } else {
        alert("Rejected Request Failed.");
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
                    <>
                      <Button
                        variant="success"
                        onClick={() => {
                          setId(center.loginid);
                          handleApprove(center.loginid);
                        }}
                        disabled={center.status}
                      >
                        Approve
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          setId(center.loginid);
                          handleReject(center.loginid);
                        }}
                        disabled={center.status}
                      >
                        Reject
                      </Button>
                    </>
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

------------------------------------------
*/

/*-------------------------------------------------------------------------------------------------------------------------
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

  const handleApprove = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: true, // Approve: Set status to true
        }),
      });
      if (response.ok) {
        alert("Approved Request Successfully !");
        window.location.reload(); // Reload the page after successful approval
      } else {
        alert("Approved Request Failed.");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleReject = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: false, // Reject: Set status to false
        }),
      });
      if (response.ok) {
        alert("Rejected Request Successfully !");
        navigate("/adminHome");
      } else {
        alert("Rejected Request Failed.");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

 
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: false, // Deactivate: Set status to false
        }),
      });
      if (response.ok) {
        alert("Account Deactivated Successfully !");
        window.location.reload(); // Reload the page after successful deactivation
      } else {
        alert("Deactivation Failed.");
      }
    } catch (error) {
      console.error("Error deactivating account:", error);
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
                    <>
                      <Button
              const handleDeactivate = async (id) => {           variant="success"
                        onClick={() => {
                          setId(center.loginid);
                          handleApprove(center.loginid);
                        }}
                        disabled={center.status}
                      >
                        Approve
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          setId(center.loginid);
                          handleReject(center.loginid);
                        }}
                        disabled={center.status}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                  {center.status && (
                    <Button
                      variant="warning"
                      onClick={() => {
                        setId(center.loginid);
                        handleDeactivate(center.loginid);
                      }}
                      disabled={!center.status}
                    >
                      Deactivate
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

-------------------------------------------------------------------------------------------------------------------------------*/
{/*
import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";


export default function ViewServiceRequests() {
  const [centers, setCenters] = useState([]);
  const [id, setId] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/serviceCenters")
      .then((resp) => resp.json())
      .then((jsonData) => setCenters(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Close the notification after 3 seconds
  };

  const handleApprove = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: true, // Approve: Set status to true
        }),
      });
      if (response.ok) {
        showNotification("Approved Request Successfully !", "success");
        setTimeout(() => {
          window.location.reload(); // Reload the page after successful deactivation
        }, 1000);
      } else {
        showNotification("Approved Request Failed.", "error");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleDelete = async (id) => {
    const url = "http://localhost:8080/deleteReq/" + id;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        showNotification("Entry Deleted Successfully !", "success");
        navigate("/adminHome");
      } else {
        showNotification("Delete Request Failed.", "error");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
    }
  };

  const handleDeactivate = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: false, // Deactivate: Set status to false
        }),
      });
      if (response.ok) {
        showNotification("Account Deactivated Successfully !", "success");
        setTimeout(() => {
          window.location.reload(); // Reload the page after successful deactivation
        }, 1000); // Delay reload for 1 seconds to display notification
      } else {
        showNotification("Deactivation Failed.", "error");
      }
    } catch (error) {
      console.error("Error deactivating account:", error);
    }
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
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
                    <>
                      <Button
                        variant="success"
                        onClick={() => {
                          setId(center.loginid);
                          handleApprove(center.loginid);
                        }}
                        disabled={center.status}
                      >
                        Approve
                      </Button>{" "}
                    </>
                  )}
                  {center.status && (
                    <ButtonGroup>
                      <Button
                        variant="warning"
                        onClick={() => {
                          setId(center.loginid);
                          handleDeactivate(center.loginid);
                        }}
                        disabled={!center.status}
                      >
                        Deactivate
                      </Button>
                      <span style={{ width: "10px" }}></span>
                      <Button
                        variant="danger"
                        onClick={() => {
                          setId(center.loginid);
                          handleDelete(center.loginid);
                        }}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
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

*/}

import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";


export default function ViewServiceRequests() {
  const [centers, setCenters] = useState([]);
  const [id, setId] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/serviceCenters")
      .then((resp) => resp.json())
      .then((jsonData) => setCenters(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000); 
  };

  const handleApprove = async (id) => {
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
        showNotification("Approved Request Successfully !", "success");
        setTimeout(() => {
          window.location.reload(); 
        }, 1000);
      } else {
        showNotification("Approved Request Failed.", "error");
      }
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleDeactivate = async (id) => {
    const url = "http://localhost:8080/updateReq/" + id;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: false, 
        }),
      });
      if (response.ok) {
        showNotification("Account Deactivated Successfully !", "success");
        setTimeout(() => {
          window.location.reload(); 
        }, 1000); 
      } else {
        showNotification("Deactivation Failed.", "error");
      }
    } catch (error) {
      console.error("Error deactivating account:", error);
    }
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <h1 className="text-center mt-5">All Requests :</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, index) => (
              <tr key={index}>
                <td>{center.loginid}</td>
                <td>{center.userid}</td>
                <td>{center.status ? "Active" : "Need Action"}</td>
                <td>
                  {!center.status && (
                    <Button
                      variant="success"
                      onClick={() => {
                        setId(center.loginid);
                        handleApprove(center.loginid);
                      }}
                      disabled={center.status}
                    >
                      Approve
                    </Button>
                  )}
                  {center.status && (
                    <Button
                      variant="warning"
                      onClick={() => {
                        setId(center.loginid);
                        handleDeactivate(center.loginid);
                      }}
                      disabled={!center.status}
                    >
                      Deactivate
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
