import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [sc, setSc] = useState([]);
  const [comment, setComment] = useState(0);
  const [selectedsc, setSelectedsc] = useState(0);
  var custid = localStorage.getItem("custid");
  const navigate = useNavigate();
  const obj = {
    rating: rating,
    comment: comment,
    customerid: custid,
    servicecenterid: selectedsc,
  };

  useEffect(() => {
    fetch("http://localhost:8080/allservicecenters")
      .then((resp) => resp.json())
      .then((br) => setSc(br));
  }, []);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
    };
    //console.log(obj);
    fetch("http://localhost:8080/setRating", reqOptions).then((resp) => {
      resp.json();
      if (resp.status === 200) {
        alert("Feedback sent !");
        navigate("/customerhome");
      } else {
        window.location.reload();
        alert("Feedback Failed !");
      }
    });
  };

  // alert("Feedback Submitted !");
  let scNames = sc.map((obj) => obj.scname);
  let scid = sc.map((obj) => obj.servicecenterid);
  return (
    <div className="text-center ">
      <table className="table table table-striped">
        <tbody>
          <tr>
            <td>Select Center :</td>
            <td>
              <select
                className="form-group"
                onChange={(e) => {
                  setSelectedsc(e.target.value);
                }}
              >
                <option>Select Center</option>
                {sc.map((s, index) => (
                  <option value={s.servicecenterid} key={index}>
                    {s.scname}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <b>Please Rate Us </b>
      </p>
      <>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              size={28}
              color={starValue <= rating ? "orange" : "gray"}
              onClick={() => handleClick(starValue)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
        <p>{rating} out of 5 stars</p>
        <div className="container justify-content-center align-items-center">
          <form>
            <div className="form-group">
              <label htmlFor="text">Comment</label>
              <textarea
                className="form-control"
                rows="3"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                className=" btn btn-primary mt-3 text-center "
                type="submit"
                onClick={sendData}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Rating;
