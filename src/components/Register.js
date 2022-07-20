import React, { useState, useEffect, useContext } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";

export default function Register() {
  const [state, setstate] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const { name, email, password, cpassword } = state;
  const handlechange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const conext = useContext(userContext);
  const { signUp } = conext;
  
  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !password || !email || !cpassword) {
      return;
    }
    signUp(name, email, password, cpassword);
    setstate({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    })
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <MDBContainer className="d-flex justify-content-center">
        <form
          style={{ width: "23rem", minHeight: "85vh" }}
          onSubmit={Handlesubmit}
        >
                    <h2 className="text-center my-3 text-white"><MDBIcon fas icon = "user-circle" color="white" className="fa-2x my-2"></MDBIcon> <br /> Sign Up</h2>

          <MDBInput
            contrast
            label="Name"
            id="name formWhite"
            type="text"
            size="lg"
            name="name"
            value={state.name}
            onChange={handlechange}
            className="bg-dark"
            minLength={3}
            required
          />
          <br />
          <MDBInput
            contrast
            label="Email"
            id="email formWhite"
            type="email"
            size="lg"
            name="email"
            value={state.email}
            onChange={handlechange}
            className="bg-dark"
            minLength={2}
            required
          />
          <br />
          <MDBInput
            label="Password"
            contrast
            id="password formWhite"
            type="password"
            size="lg"
            name="password"
            value={state.password}
            onChange={handlechange}
            className="bg-dark"
            required
            minLength={5}
          />
          <br />
          <MDBInput
            label="Confirm Password"
            contrast
            id="cpassword formWhite"
            type="password"
            size="lg"
            name="cpassword"
            value={state.cpassword}
            onChange={handlechange}
            className="bg-dark"
            required
            minLength={5}
          />
          <br />
          <MDBBtn

            active
            outline
            color="light"
            type="submit"
            onSubmit={Handlesubmit}
          >
            Sign Up
          </MDBBtn>
          <p className="text-center text-white">
            <Link className="text-white text-decoration-underline" to="/components/Otpconfirm">
              Activate
            </Link>{" "}
          </p>
          <p className="text-center text-white">
            <Link className="text-white text-decoration-underline" to="/">
              Back
            </Link>{" "}
          </p>
          <br />
        </form>
      </MDBContainer>
    </div>
  );
}
