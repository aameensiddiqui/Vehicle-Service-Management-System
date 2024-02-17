import moment from "moment";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

export default function UpdateServiceProgress() {
  const [data, setDate] = useState([]);
  const [servProg, setServProg] = useState([]);
  const [msg, setMsg] = useState("");
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [displayList, setDisplayList] = useState(false);
  const [paymentMode, setPaymentMode] = useState(null);
  const [transactionData, setTransactionData] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);
  const [serviceRequestId, setServiceRequestId] = useState(0);

  const handlePaymentModeChange = (evt) => {
    setPaymentMode(evt.target.value);
  };

  //Handle Transaction-----------------------
  const handleTransaction = () => {
    if (servProg) {
      console.log("ServProg" + servProg);
      setShowCheckoutDialog(true);

      localStorage.setItem("serviceprogressid", servProg?.serviceprogressid);

      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          amount: servProg?.servicerequestid?.pkgid?.cost,
          date: new Date(),
          paymentmode: paymentMode,
          serviceprogressid: servProg?.serviceprogressid,
        }),
      };
      //To Add Transaction details in table ------------
      fetch("http://localhost:8080/addTransaction", reqOptions)
        .then((resp) => resp.json())
        .then((jsonData) => {
          setTransactionData(jsonData);
          setShowCheckoutDialog(false);
          return jsonData;
        })
        .then((transactionData) => {
          //call checkout here
          checkOut(
            transactionData?.serviceprogres.servicerequestid.servicerequestid
          );
          console.log("jsonData-", transactionData);

          const reqOptions = {
            mode: "no-cors",
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              status: true,
              servicerequestid:
                transactionData?.serviceprogres.servicerequestid
                  .servicerequestid,
              transactionid: transactionData?.transactionid,
            }),
          };
          console.log("Request Options " + reqOptions);
          return fetch("http://localhost:8080/createInvoice", reqOptions)
            .then((response) => response.json())
            .then((jsonData) => {
              setInvoiceData(jsonData);
            })

            .catch((e) => console.log(e));
        })

        .catch((e) => console.log(e));
    }
  };

  //Enter Check In details-----------------------
  const checkIn = (servicerequestId) => {
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        checkin: new Date().toISOString(),
        stageone: null,
        stagetwo: null,
        checkout: null,
        delivered: null,
        servicerequestid: servicerequestId,
      }),
    };
    fetch("http://localhost:8080/addCheckIn", reqOptions)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.checkin !== null) {
          alert("Check In Complete!");
        }
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  };

  //Enter Stage One details-----------------------
  const stageOne = (servicerequestId) => {
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        stageone: new Date().toISOString(),
        stagetwo: null,
        checkout: null,
        delivered: null,
        checkin: null,
        servicerequestid: servicerequestId,
      }),
    };
    fetch("http://localhost:8080/addStageOne", reqOptions)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.stageone !== null) {
          alert("Stage One Complete!");
        }
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  };

  //Enter Stage Two details-----------------------
  const stageTwo = (servicerequestId) => {
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        stageone: null,
        stagetwo: new Date().toISOString(),
        checkout: null,
        delivered: null,
        checkin: null,
        servicerequestid: servicerequestId,
      }),
    };
    fetch("http://localhost:8080/addStageTwo", reqOptions)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.stagetwo !== null) {
          alert("Stage Two Complete!");
        }
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  };

  //Enter Check Out details-----------------------
  const checkOut = (servicerequestId) => {
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        checkin: null,
        stageone: null,
        stagetwo: null,
        checkout: new Date().toISOString(),
        delivered: null,
        servicerequestid: servicerequestId,
      }),
    };
    fetch("http://localhost:8080/addCheckOut", reqOptions)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.checkout !== null) {
          alert("Checkout Complete!");
        }
        console.log(jsonData);
      })
      .catch((e) => console.log(e));

    fetch(
      "http://localhost:8080/getServProgIdByServreqId?ServReqId=" +
        servicerequestId
    )
      .then((resp) => resp.json())
      .then((jsonData) => setServProg(jsonData))
      .then(() => {
        // setShowCheckoutDialog(true);
      })
      .catch((e) => console.log(e));
  };

  //Enter delivered details-----------------------
  const delivered = (servicerequestId) => {
    changeServiceStatus(servicerequestId);
    fetch("http://localhost:8080/addDelivered?srid=" + servicerequestId)
      .then((resp) => resp.json())
      .then((jsonData) => {
        if (jsonData.delivered === true) {
          alert("Service Complete!");
        }
        console.log(jsonData);
      })
      .catch((e) => console.log(e));
  };

  const changeServiceStatus = (servicerequestId) => {
    fetch("http://localhost:8080/changeStatus?srid=" + servicerequestId)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Service Complete");
          return resp.json();
        }
      })
      .catch((e) => console.log(e));
  };

  const fetchServiceProgress = (servicerequestId) => {
    fetch(
      "http://localhost:8080/getServProgIdByServreqId?ServReqId=" +
        servicerequestId
    )
      .then((resp) => resp.json())
      .then((jsonData) => setServProg(jsonData))
      .then(() => {
        // setShowCheckoutDialog(true);
      })
      .catch((e) => console.log(e));
  };

  const openCheckoutDialog = (servicerequestId) => {
    fetchServiceProgress(servicerequestId);
    setShowCheckoutDialog(true);
  };

  //TO fetch Today's Service Requests for a Service Center
  useEffect(() => {
    let currentDate = moment(new Date()).format("YYYY-MM-DD");
    console.log(currentDate);
    var url =
      "http://localhost:8080/getAllServiceReqsByDateSc?date=" +
      currentDate +
      "&scid=" +
      localStorage.getItem("scid");
    fetch(url)
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log(jsonData);
        setDate(jsonData);
        if (jsonData.length === 0) {
          setDisplayList(true);
          setMsg("No Bookings Today");
        } else {
          setDisplayList(false);
          setMsg("");
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h2>Todays Booking List</h2>
      </div>
      <span style={{ color: "red" }}>
        <h3>
          <br />
          {msg}
        </h3>
      </span>
      <table
        className="table table table-striped"
        style={{
          display: displayList ? "none" : "block",
          overflowX: "auto",
          width: "auto",
        }}
      >
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Owner Name</th>
            <th>Owner Contact Number</th>
            <th>Pickup Time</th>
            <th>Address</th>
            <th>Package</th>
            <th colSpan={4}>Update Progress</th>
            <th colSpan={2}>Completion Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((b, index) => {
            return (
              <tr key={index} value={b.servicerequestid}>
                <td>{b.vehid.vehiclenumber}</td>
                <td>{b.vehid.customerid?.firstname}</td>
                <td>{b.vehid.customerid?.contactno}</td>
                <td>{b.pickuptime}</td>
                <td>{b.vehid.customerid?.lane}</td>
                <td>{b.pkgid.packagename}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => checkIn(b.servicerequestid)}
                  >
                    Check-In
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => stageOne(b.servicerequestid)}
                  >
                    Stage-1 Complete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => stageTwo(b.servicerequestid)}
                  >
                    Stage-2 Complete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => openCheckoutDialog(b.servicerequestid)}
                  >
                    Check-Out
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => delivered(b.servicerequestid)}
                  >
                    Delivered
                  </button>
                </td>
                <td>{b.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Transaction
        show={showCheckoutDialog}
        data={servProg}
        onClose={() => setShowCheckoutDialog(true)}
        handleSave={handleTransaction}
        handlePaymentModeChange={handlePaymentModeChange}
      />
    </div>
  );
}
