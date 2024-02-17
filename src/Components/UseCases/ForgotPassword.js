import { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../slice";
import { Button } from "react-bootstrap";

const ForgotPassword = () => {
  const [question, setQuestion] = useState([]);
  const [question_id, setQuestionid] = useState(0);
  const [display, setDisplay] = useState(false);
  const [form, setForm] = useState(true);

  //-------------------------------------------------
  const obj = {
    uid: "",
    pwd: "",
  };
  const reducer2 = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return obj;
    }
  };

  const [send, dispatch2] = useReducer(reducer2, obj);

  const changePwd = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      // body: JSON.stringify(send),
    };
    fetch(
      "http://localhost:8080/changePwd?userid=" +
        send.uid +
        "&newPwd=" +
        send.pwd,
      reqOptions
    )
      .then(function (response) {
        if (response.status === 200) {
          // server returned 1
          alert("Password changed Successfully. Try Login...");
          navigate("/Login");
        } else {
          // server did not return 1
          alert("Wrong credentials");
        }
      })
      .catch(function (error) {
        // handle error
        alert("Server error try later...");
      });
  };
  //-------------------------------------------------
  useEffect(() => {
    const getquestion = async () => {
      const resquestion = await fetch("http://localhost:8080/getQuestions");
      const resques = await resquestion.json();
      setQuestion(await resques);
    };
    getquestion();
  }, []);

  const handlequestion = (event) => {
    const getquestionid = event.target.value;
    setQuestionid(getquestionid);
  };

  const init = {
    uid: "",
    answer: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
    }
  };
  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    console.log(info);
    const reqOptions = {
      //mode: "no-cors",
      method: "POST",
      headers: { "content-type": "application/json" },
    };
    fetch(
      "http://localhost:8080/checkAnswer?userid=" +
        info.uid +
        "&answer=" +
        info.answer,
      reqOptions
    )
      .then((resp) => resp.json())
      .then((jsonData) => {
        //console.log("JSON DATA", jsonData);
        return jsonData;
      })
      .then((jsonData) => {
        if (jsonData.userid === info.uid) {
          alert("Details Matched");
          setDisplay(true);
          setForm(false);
        }
        console.log("Data -", jsonData);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className=" back app">
      <br />
      <h3 className="title" style={{ textAlign: "center", paddingBottom: 30 }}>
        Forgot Password
      </h3>
      <form style={{ display: form ? "block" : "none" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="uid" className="form-label">
                  Enter Uid:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uid"
                  name="uid"
                  size="sm"
                  value={info.uid}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "uid",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter uid"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>

              <div className="mb-3">
                <label htmlFor="question" className="label-control">
                  Select Question:
                </label>
                <select
                  name="question"
                  className="form-control"
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "questionid",
                      val: e.target.value,
                    })
                  }
                >
                  <option value="">--Select Security Question--</option>
                  {question.map((getques, index) => (
                    <option key={index} value={getques.questionid}>
                      {getques.questiontext}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="answer" className="form-label">
                  Enter Answer:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="answer"
                  name="answer"
                  size="sm"
                  value={info.answer}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "answer",
                      val: e.target.value,
                    })
                  }
                  placeholder="Enter Answer"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <Button
                color="primary"
                type="submit"
                onClick={(e) => {
                  sendData(e);
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                type="reset"
                className="ms-4"
                onClick={() => {
                  dispatch({ type: "reset" });
                }}
              >
                Reset
              </Button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
      <br />
      {/*************************** Change Password ********************************************/}
      <div style={{ display: display ? "block" : "none" }}>
        <form>
          <h3>Change Password</h3>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="form">
                <div className="mb-3">
                  <label htmlFor="uid" className="form-label">
                    Enter Uid:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uid"
                    name="uid"
                    size="sm"
                    value={send.uid}
                    onChange={(e) =>
                      dispatch2({
                        type: "update",
                        fld: "uid",
                        val: e.target.value,
                      })
                    }
                    placeholder="Enter uid"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">
                    Enter New Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    name="pwd"
                    size="sm"
                    value={send.pwd}
                    onChange={(e) =>
                      dispatch2({
                        type: "update",
                        fld: "pwd",
                        val: e.target.value,
                      })
                    }
                    placeholder="Enter New Password"
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <Button
                  color="primary"
                  type="submit"
                  onClick={(e) => {
                    changePwd(e);
                  }}
                >
                  Submit
                </Button>
                <Button
                  color="secondary"
                  type="reset"
                  className="ms-4"
                  onClick={() => {
                    dispatch({ type: "reset" });
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
