import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function VehRegistration() {
	const init = {
		customerid: localStorage.getItem("custid"),
		number: "",
		running: "",
		model: "",
		regyear: "",
		brandid: 0,
		fueltype: { value: "", error: "", valid: false, touched: false },
	};

	const fueltypes = [
		{ id: 1, fueltype: "Petrol" },
		{ id: 2, fueltype: "Diesel" },
		{ id: 3, fueltype: "CNG" },
	];

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

	const [info, dispatch] = useReducer(reducer, init);
	const [allbrands, setAllbrands] = useState([]);
	const [fueltype, setFueltype] = useState("");
	const [brandid, setBrandid] = useState(0);
	const navigate = useNavigate();
	const reduxAction = useDispatch();

	const validate = (fieldName, value) => {
		if (value.trim() === "") {
			return true;
		}

		switch (fieldName) {
			case "number":
      return /^[A-Z0-9 ]+$/.test(value);

			case "model":
				return /^[a-zA-Z0-9]*$/.test(value);

			case "fueltype":
				if (value.equals("Petrol")) {
					return true;
				} else if (value.equals("Diesel")) {
					return true;
				} else if (value.equals("CNG")) {
					return true;
				} else {
					return "Please Select Valid Options";
				}

			case "regyear":
				return /^[0-9]{4,}$/.test(value);

			default:
				return true;
		}
	};
	const handleFieldChange = (fieldName, value) => {
		console.log(fieldName + " : " + value);
		
		const isValid = validate(fieldName, value);

		
		dispatch({
			type: "update",
			fld: fieldName,
			value: value,
		});

		
		return isValid;
	};
	const senddata = (e) => {
		e.preventDefault();
		console.log(info);
		// console.log("Brand id-" + brandid);
		const reqOptions = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(info),
		};
		fetch("http://localhost:8080/registervehicle", reqOptions)
			.then((resp) => {
				resp.json();
				if (resp.status === 200) {
					alert("Vehicle Information Added.");
					navigate("/customerhome");
				} else {
					window.location.reload();
					alert("Registration Failed.");
				}
			})
			.then((obj) => console.log(JSON.stringify(obj)));
	};

	useEffect(() => {
		fetch("http://localhost:8080/getBrands")
			.then((resp) => resp.json())
			.then((c) => setAllbrands(c));
	}, []);

	return (
		<div style={{ backgroundColor: "white" }}>
			<div className="container">
				<h2 style={{ textAlign: "center" }}>Vehicle Registration</h2>
				<form>
					<table className="table table table-striped">
						<tbody>
							<tr className="form-group">
								<td>
									<label htmlFor="brandid"> Select Brand</label>
								</td>
								<td>
									<select
										className="form-group"
										id="brandid"
										name="brandid"
										onChange={(e) =>
											dispatch({
												type: "update",
												fld: "brandid",
												value: e.target.value,
											})
										}>
										<option>Select One</option>
										{allbrands.map((b) => {
											return (
												<option value={b.brandid} key={b.brandid}>
													{b.bname}
												</option>
											);
										})}
									</select>
								</td>
							</tr>
							<tr className="form-group">
								<td>
									<label htmlFor="number">
										Vehicel Number : (e.g.MH13CN5962)
									</label>
								</td>

								<td>
									<input
										type="text"
										className="form-control"
										id="number"
										placeholder="Enter Contact number"
										name="number"
										value={info.number}
										onChange={(e) =>
											handleFieldChange("number", e.target.value)
										}
									/>
									{!validate("number", info.number) && (
										<div className="form-text text-danger">
											Vehicle Number should consist of capital letters and
											numbers only, without any special characters or spaces
										</div>
									)}
								</td>
							</tr>

							<tr className="form-group">
								<td>
									<label htmlFor="fname">Model Name:</label>
								</td>
								<td>
									<input
										type="text"
										className="form-control"
										id="model"
										placeholder="Enter Model Details"
										name="model"
										value={info.model}
										onChange={(e) => handleFieldChange("model", e.target.value)}
									/>
									{!validate("model", info.model) && (
										<div className="form-text text-danger">
											The vehicle name should contain only alphabets and
											numbers. Special characters and symbols are not allowed.
										</div>
									)}
								</td>
							</tr>
							<tr className="form-group">
								<td>
									<label htmlFor="fueltype"> Select Fuel Type :</label>
								</td>
								<td>
									<select
										className="form-group"
										id="fueltype"
										name="fueltype"
										onChange={(e) => {
											dispatch({
												type: "update",
												fld: "fueltype",
												value: e.target.value,
											});
										}}>
										<option>Select One</option>
										{fueltypes.map((f) => {
											return (
												<option value={f.fueltype} key={f.fueltype}>
													{f.fueltype}
												</option>
											);
										})}
									</select>
								</td>
							</tr>
							<tr className="form-group">
								<td>
									<label htmlFor="reyear">Registration Year:</label>
								</td>
								<td>
									<input
										type="number"
										className="form-control"
										id="regyear"
										placeholder="Enter Registration Year"
										name="regyear"
										value={info.regyear}
										onChange={(e) =>
											handleFieldChange("regyear", e.target.value)
										}
									/>
									{!validate("regyear", info.regyear) && (
										<div className="form-text text-danger">
											Invalid Year.
										</div>
									)}
								</td>
							</tr>
							<tr className="form-group">
								<td>
									<label htmlFor="running">
										Current Vehicle Running (Kilometer) :
									</label>
								</td>
								<td>
									<input
										type="number"
										className="form-control"
										id="running"
										placeholder="Enter Travelled Distance"
										name="running"
										value={info.running.value}
										onChange={(e) => {
											validate("running", e.target.value);
										}}
									/>
									<div
										id="emailHelp"
										className="form-text"
										style={{
											display:
												!info.running.valid && info.running.touched
													? "block"
													: "none",
										}}>
										{info.running.error}
									</div>
								</td>
							</tr>
							<tr className="form-group">
								<td style={{ textAlign: "right" }}>
									<hr />
									<button
										type="submit"
										className="btn btn-primary mb-3"
										onClick={(e) => {
											senddata(e);
										}}>
										Submit
									</button>
								</td>
								<td style={{ textAlign: "left" }}>
									<hr />
									<button
										type="reset"
										className="btn btn-secondary mb-3"
										onClick={() => {
											dispatch({ type: "reset" });
										}}>
										Reset
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}
