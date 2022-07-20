import React, { useState, useContext, useEffect } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/UserContext";


export default function Login() {
  const [state, setstate] = useState({ email: "", password: "" });
  const { email, password } = state;
  const handlechange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const navigate = useNavigate()
  const context = useContext(userContext);
  const { logIn, user } = context;

  
  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!password || !email) {
      return;
    }
    logIn(email, password);
    
  };

  useEffect(() => {
    if (user.stat) {
      navigate("../components/Home");
    }
    else {
      navigate("../components/Login");
    }
    return () => {
      console.log("changed")
    }
  }, [user])


  return (
    <div style={{ backgroundColor: "black" }}>
      <MDBContainer className="d-flex justify-content-center">
        <form
          style={{ width: "23rem", minHeight: "85vh" }}
          onSubmit={Handlesubmit}
        >
          
          <h2 className="text-center my-3 text-white"><MDBIcon fas icon = "user-circle" color="white" className="fa-2x my-2"></MDBIcon> <br /> Login In</h2>
          {/* {console.log(user)} */}

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
            required
          />
          <br />
          <MDBInput
            label="Password"
            contrast
            id="pass formWhite"
            type="password"
            size="lg"
            name="password"
            minLength={5}
            value={state.password}
            onChange={handlechange}
            className="bg-dark"
            required
          />
          <br />
          <p>
            <Link to="/components/Resend" className="text-white text-decoration-underline">Forgot password</Link>
          </p>

          <MDBBtn disabled={false
          } active outline color="light" type="submit" onSubmit={Handlesubmit}>
            Sign In
          </MDBBtn>
          <p className="text-center my-5 text-white">
            Don't have account? <Link className="text-white text-decoration-underline" to="/components/Register">Sign up</Link>{" "}
          </p>
        </form>
      </MDBContainer>

    </div>
  );
}
