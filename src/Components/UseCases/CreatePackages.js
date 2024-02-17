import { useEffect, useState } from "react";

export default function CreatePackages() {
  const [facilities, setFacilities] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const init = {
    packagename: { value: "", error: "", valid: false, touched: false },
    cost: { value: "", error: "", valid: false, touched: false },
    facilities: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          [action.fld]: action.value,
        };
      case "reset":
        return init;
    }
  };

  useEffect(() => {
    var scid = localStorage.getItem("scid");
    fetch("http://localhost:8080/getfacilities")
      .then((resp) => resp.json())
      .then((jsonData) => {
        setFacilities(jsonData);
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <br />
      <div>
        <h3>Create Package</h3>
      </div>

      <div>
        <form>
           <table /*className="table table-striped" */>
            <tbody>
              <tr>
                <td>Package Name</td>
                <td>
                  <input type="text" required />
                </td>
              </tr>
              <tr>
                <td>Package Cost</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>Select Facilities</td>
                <td>
                  {facilities.map((f, index) => {
                    return (
                      <li key={index}>
                        <input type="checkbox" value={f.facilityid} />
                        {f.facilityname}
                      </li>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    // color="primary"
                    type="submit"
                    onClick={(e) => {
                      sendData(e);
                    }}
                  >
                    Create
                  </button>
                </td>
                <td>
                  <button className="btn btn-secondary">Reset</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      {/* {JSON.stringify(facilities)} */}
    </div>
  );
}
