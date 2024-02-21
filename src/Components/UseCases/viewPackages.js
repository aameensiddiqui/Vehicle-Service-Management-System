/*
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ViewPackages() {
  const [pkgs, setPkgs] = useState([]);
  const [pkgmsg, setPkgmsg] = useState("");
  const [pk_res, setPk_res] = useState(false);
  const [scid, setScid] = useState(""); // Assuming service center ID is stored in the state or context after login

  const navigate = useNavigate();

  useEffect(() => {
    // Set scid value to the scid of the logged-in account
    const loggedInScid = localStorage.getItem("scid");
    if (loggedInScid) {
      setScid(loggedInScid);
    }
  }, []); // Run only once after the component mounts to set scid

  useEffect(() => {
    // Fetch packages for the logged-in service center
    if (scid) {
      fetchPackagesForServiceCenter();
    }
  }, [scid]); // Fetch packages whenever the service center ID changes

  const fetchPackagesForServiceCenter = () => {
    fetch("http://localhost:8080/getPackageByScId?scid=" + scid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setPkgs([]);
          setPk_res(false);
          setPkgmsg("No Packages Found");
        } else {
          setPkgs(jsonData);
          setPk_res(true);
          setPkgmsg("");
        }
      })
      .catch((e) => console.log(e));
  };

  const setValues = (pkgId) => {
    localStorage.setItem("pkgid", pkgId);
    navigate("/customerhome/bookAppointment");
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <h3>Service Center Packages</h3>
      <hr />
      <div id="pkgres" style={{ display: pk_res ? "block" : "none" }}>
        <div>
          <h2>Packages Information</h2>
          <table className="table table table-striped" border={1}>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Package Cost</th>
                <th>Facilities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pkgs.map((p, index) => (
                <tr key={index}>
                  <td>{p.packagename}</td>
                  <td>{p.cost}</td>
                  <td>
                    <ul>
                      {p.facilities.map((f, index) => (
                        <li style={{ textAlign: "left" }} key={index}>
                          {f.facilityname}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => setValues(p.packagedetailsid)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <span style={{ color: "red" }}>
        <h3>{pkgmsg}</h3>
      </span>
    </div>
  );
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ViewPackages() {
  const [pkgs, setPkgs] = useState([]);
  const [pkgmsg, setPkgmsg] = useState("");
  const [pk_res, setPk_res] = useState(false);
  const [scid, setScid] = useState(""); // Assuming service center ID is stored in the state or context after login

  const navigate = useNavigate();

  useEffect(() => {
    // Set scid value to the scid of the logged-in account
    const loggedInScid = localStorage.getItem("scid");
    if (loggedInScid) {
      setScid(loggedInScid);
    }
  }, []); // Run only once after the component mounts to set scid

  useEffect(() => {
    // Fetch packages for the logged-in service center
    if (scid) {
      fetchPackagesForServiceCenter();
    }
  }, [scid]); // Fetch packages whenever the service center ID changes

  const fetchPackagesForServiceCenter = () => {
    fetch("http://localhost:8080/getPackageByScId?scid=" + scid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setPkgs([]);
          setPk_res(false);
          setPkgmsg("No Packages Found");
        } else {
          setPkgs(jsonData);
          setPk_res(true);
          setPkgmsg("");
        }
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (packageId) => {
    fetch(`http://localhost:8080/deletePackage?packageId=${packageId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.success) {
          const updatedPkgs = pkgs.filter((pkg) => pkg.packagedetailsid !== packageId);
          setPkgs(updatedPkgs);
          setPkgmsg("Package deleted successfully");
        } else {
          setPkgmsg("Failed to delete package");
        }
      })
      .catch((error) => {
        console.error('Error deleting package:', error);
        setPkgmsg("An error occurred while deleting package");
      });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <h3>Service Center Packages</h3>
      <hr />
      <div id="pkgres" style={{ display: pk_res ? "block" : "none" }}>
        <div>
          <h2>Packages Information</h2>
          <table className="table table table-striped" border={1}>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Package Cost</th>
                <th>Facilities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pkgs.map((p, index) => (
                <tr key={index}>
                  <td>{p.packagename}</td>
                  <td>{p.cost}</td>
                  <td>
                    <ul>
                      {p.facilities.map((f, index) => (
                        <li style={{ textAlign: "left" }} key={index}>
                          {f.facilityname}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(p.packagedetailsid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <span style={{ color: "red" }}>
        <h3>{pkgmsg}</h3>
      </span>
    </div>
  );
}
*/

/*

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Notification component
const Notification = ({ message }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: 'rgba(255, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', color: 'white' }}>
      {message}
    </div>
  );
}

export default function ViewPackages() {
  const [pkgs, setPkgs] = useState([]);
  const [pkgmsg, setPkgmsg] = useState("");
  const [pk_res, setPk_res] = useState(false);
  const [scid, setScid] = useState(""); // Assuming service center ID is stored in the state or context after login

  const navigate = useNavigate();

  useEffect(() => {
    // Set scid value to the scid of the logged-in account
    const loggedInScid = localStorage.getItem("scid");
    if (loggedInScid) {
      setScid(loggedInScid);
    }
  }, []); // Run only once after the component mounts to set scid

  useEffect(() => {
    // Fetch packages for the logged-in service center
    if (scid) {
      fetchPackagesForServiceCenter();
    }
  }, [scid]); // Fetch packages whenever the service center ID changes

  const fetchPackagesForServiceCenter = () => {
    fetch("http://localhost:8080/getPackageByScId?scid=" + scid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setPkgs([]);
          setPk_res(false);
          setPkgmsg("No Packages Found");
        } else {
          setPkgs(jsonData);
          setPk_res(true);
          setPkgmsg("");
        }
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (packageId) => {
    fetch(`http://localhost:8080/deletePackage?packageId=${packageId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.success) {
          const updatedPkgs = pkgs.filter((pkg) => pkg.packagedetailsid !== packageId);
          setPkgs(updatedPkgs);
          setPkgmsg("Package deleted successfully");
        } else {
          setPkgmsg("Failed to delete package");
        }
      })
      .catch((error) => {
        console.error('Error deleting package:', error);
        setPkgmsg("An error occurred while deleting package");
      });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <h3>Service Center Packages</h3>
      <hr />
      {pkgmsg && <Notification message={pkgmsg} />}
      <div id="pkgres" style={{ display: pk_res ? "block" : "none" }}>
        <div>
          <h2>Packages Information</h2>
          <table className="table table table-striped" border={1}>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Package Cost</th>
                <th>Facilities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pkgs.map((p, index) => (
                <tr key={index}>
                  <td>{p.packagename}</td>
                  <td>{p.cost}</td>
                  <td>
                    <ul>
                      {p.facilities.map((f, index) => (
                        <li style={{ textAlign: "left" }} key={index}>
                          {f.facilityname}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(p.packagedetailsid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
*/
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Notification component
const Notification = ({ message }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: 'rgba(255, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', color: 'white' }}>
      {message}
    </div>
  );
}

export default function ViewPackages() {
  const [pkgs, setPkgs] = useState([]);
  const [pkgmsg, setPkgmsg] = useState("");
  const [pk_res, setPk_res] = useState(false);
  const [scid, setScid] = useState(""); // Assuming service center ID is stored in the state or context after login

  const navigate = useNavigate();

  useEffect(() => {
    // Set scid value to the scid of the logged-in account
    const loggedInScid = localStorage.getItem("scid");
    if (loggedInScid) {
      setScid(loggedInScid);
    }
  }, []); // Run only once after the component mounts to set scid

  useEffect(() => {
    // Fetch packages for the logged-in service center
    if (scid) {
      fetchPackagesForServiceCenter();
    }
  }, [scid]); // Fetch packages whenever the service center ID changes

  const fetchPackagesForServiceCenter = () => {
    fetch("http://localhost:8080/getPackageByScId?scid=" + scid)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.length === 0) {
          setPkgs([]);
          setPk_res(false);
          setPkgmsg("No Packages Found");
        } else {
          setPkgs(jsonData);
          setPk_res(true);
          setPkgmsg("");
        }
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (packageId) => {
    fetch(`http://localhost:8080/deletePackage?packageId=${packageId}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.success) {
          const updatedPkgs = pkgs.filter((pkg) => pkg.packagedetailsid !== packageId);
          setPkgs(updatedPkgs);
          setPkgmsg("Package deleted successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Reload the page after 3 seconds
        } else {
          setPkgmsg("Failed to delete package");
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Reload the page after 3 seconds
        }
      })
      .catch((error) => {
        console.error('Error deleting package:', error);
        setPkgmsg("An error occurred while deleting package");
        setTimeout(() => {
            window.location.reload();
          }, 1000); // Reload the page after 3 seconds
      });
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <h3>Service Center Packages</h3>
      <hr />
      {pkgmsg && <Notification message={pkgmsg} />}
      <div id="pkgres" style={{ display: pk_res ? "block" : "none" }}>
        <div>
          <h2>Packages Information</h2>
          <table className="table table table-striped" border={1}>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Package Cost</th>
                <th>Facilities</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pkgs.map((p, index) => (
                <tr key={index}>
                  <td>{p.packagename}</td>
                  <td>{p.cost}</td>
                  <td>
                    <ul>
                      {p.facilities.map((f, index) => (
                        <li style={{ textAlign: "left" }} key={index}>
                          {f.facilityname}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(p.packagedetailsid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
