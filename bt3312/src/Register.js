import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import DataMgr from './DataMgr'; 

function Register() {
	const [fullname, setFullname] = useState("")
	const [email, setEmail] = useState("")
	const [address, setAddress] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		return() => {
			DataMgr.loadData()
		};
	}, [])

	function addUser(e) {
		let user = {
			"fullname": fullname,
			"email": email,
			"address": address,
			"phoneNumber": phoneNumber,
			"password": password
		}
		DataMgr.addUser(user)
	}



	return (
		<>
		<div className="container">
			<form action="/action_page.php">
			  <div className="mb-3 mt-3">
			    <label for="Fullname" className="form-label">Fullname:</label>
			    <input type="name" className="form-control" id="pwd" placeholder="Enter Fullname" name="pswd"/>
			  </div>

			  <div className="mb-3">
			    <label for="pwd" className="form-label">Email:</label>
			    <input type="email" className="form-control" id="pwd" placeholder="Enter email" name="pswd"/>
			  </div>

			  <div className="mb-3">
			    <label for="pwd" className="form-label">Password:</label>
			    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
			  </div>

			  <div className="mb-3">
			    <label for="pwd" className="form-label">Address:</label>
			    <input type="address" className="form-control" id="pwd" placeholder="Enter address" name="pswd"/>
			  </div>

			  <div className="mb-3">
			    <label for="pwd" className="form-label">Phone number:</label>
			    <input type="phoneNumber" className="form-control" id="pwd" placeholder="Enter Phone Number" name="pswd"/>
			  </div>

			  <div className="form-check mb-3">
			    <label className="form-check-label">
			      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
			    </label>
			  </div>

			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		<div>
		<a
      	className="App-link"
      	href="/"
      	rel="noopener noreferrer"
      	>
      	Back to Home page
      	</a>
      	<br/>
		<a
      	className="App-link"
      	href="/login"
      	rel="noopener noreferrer"
      	>
      	Login
      	</a>
		</div>
		</div>
		</>
	);
}

export default Register;