import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// export default function Requests() {
//   const [serviceCenters, setServiceCenters] = useState([
//     { id: 1, name: 'Hundai Service Center' , location: 'Kothrud', status: 'Pending' },
//     { id: 2, name: 'Tata Service Center', location: 'Karve nagar', status: 'Approved' },
//     { id: 3, name: 'Honda Service Center', location: 'Shivaji Nagar', status: 'Rejected' },
//   ]);

//   const approveServiceCenter = (id) => {
//     const updatedServiceCenters = serviceCenters.map((center) =>
//       center.id === id ? { ...center, status: 'Approved' } : center
//     );
//     setServiceCenters(updatedServiceCenters);
//   };

//   const rejectServiceCenter = (id) => {
//     const updatedServiceCenters = serviceCenters.map((center) =>
//       center.id === id ? { ...center, status: 'Rejected' } : center
//     );
//     setServiceCenters(updatedServiceCenters);
//   };

//   return (
//     <>
//     <h1 className="text-center">All Centers :</h1>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Location</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {serviceCenters.map((center) => (
//           <tr key={center.id}>
//             <td>{center.id}</td>
//             <td>{center.name}</td>
//             <td>{center.location}</td>
//             <td>{center.status}</td>
//             <td>
//               {center.status === 'Pending' && (
//                 <>
//                   <Button variant="success" onClick={() => approveServiceCenter(center.id)}>
//                     Approve
//                   </Button>{' '}
//                   <Button variant="danger" onClick={() => rejectServiceCenter(center.id)}>
//                     Reject
//                   </Button>
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table></>

//   );
// };
export default function ViewServiceRequests() {
  const [centers, setCenters] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/all")
      .then((resp) => resp.json())
      .then((jsonData) => setCenters(jsonData));
    //navigate("view");
  }, []);

  const [id, setId] = useState("");

  const handleSubmit = async () => {
    const url = "http://localhost:8080/updateReq/" + id;
    const response = await fetch(url, {
      //mode: "no-cors",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: true,
      }),
    }).then((resp) => {
      resp.json();
      if (resp.status === 200) {
        alert("Approved Request Successfully !");
        navigate("/adminHome");
        //window.location.reload();
      } else {
        //window.location.reload();
        alert("Approved Request  Failed.");
      }
    });

    //console.log(response.status);
  };

  useEffect(() => {
    handleSubmit();

    //navigate("view");
  }, [id]);
  let result;

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

                <td>{(result = center.status ? "Approved" : "Need Action")}</td>
                <td>
                  {center.status === false && (
                    <>
                      <Button
                        variant="success"
                        onClick={() => {
                          setId(center.loginid);
                          handleSubmit(center.loginid);
                        }}
                      >
                        Approve
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
