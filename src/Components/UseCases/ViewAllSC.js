
import React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ViewAllSC(){
  const [servicecent, setServiceCent] = useState([]);
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
  fetch("https://localhost:7001/api/AllServiceCenters/GetServicecenters", {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  })
  .then(resp => {
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    return resp.json();
  })
  .then(obj => {
    console.log(obj);
    setServiceCent(obj);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}, []);

return (
    <div>
       <table className="table table-borderedA table-hover" >
          <thead className='table-dark'>
            <tr>
            <th className="fs-6 fw-medium">loginid</th>
              <th className="fs-6 fw-medium">ServiceCenterId</th>
              <th className="fs-6 fw-medium">ServiceCenterName</th>
              <th className="fs-6 fw-medium">emailid</th>
              <th className="fs-6 fw-medium">contactno</th>
              <th className="fs-6 fw-medium">Address</th>
              {/* <th className="fs-6 fw-medium">brandid</th> */}
              <th className="fs-6 fw-medium">bookinglimit</th>
    
              {/* <th className="fs-6 fw-medium">area</th>
              <th className="fs-6 fw-medium">brand</th>
              <th className="fs-6 fw-medium">login</th>
              <th className="fs-6 fw-medium">packagedetails</th>
              <th className="fs-6 fw-medium">ratings</th>
            <th className="fs-6 fw-medium">servicerequests</th> 
            <th className="fs-6 fw-medium">areaid</th>*/}

            </tr>
          </thead>
          <tbody>
            {servicecent.map((v) => {
              return (<tr key={v.empId}>
                <td className="fs-6">{v.loginid}</td>
                <td className="fs-6">{v.servicecenterid}</td>
                <td className="fs-6">{v.scname}</td>
                <td className="fs-6">{v.emailid}</td>
                <td className="fs-6">{v.contactno}</td>
                <td className="fs-6">{v.lane}</td>
                {/* <td className="fs-6">{v.brandid}</td> */}
                <td className="fs-6">{v.bookinglimit}</td>
                
                {/*<td className="fs-6">{v.areaid}</td>
                 <td className="fs-6">{v.area}</td>
                <td className="fs-6">{v.brand}</td>
                <td className="fs-6">{v.login}</td>
                <td className="fs-6">{v.packagedetails}</td>
                <td className="fs-6">{v.ratings}</td>
                <td className="fs-6">{v.servicerequests}</td> */}


              
              </tr>);
            })}
          </tbody>
        </table>
    </div>
  );
};

export default ViewAllSC;
