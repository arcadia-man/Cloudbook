import React, { useState, useContext } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import userContext from "../context/UserContext";


const Otpconfirm = () => {
  const [otp, setotp] = useState("");
  const [email, setemail] = useState("");
  const context = useContext(userContext);
  const {activate, resendo} = context;
  const Handlesubmit = (e) => {
    e.preventDefault();
    if(otp.length !== 4){
      toast.error("Enter valid otp.")
      return;
    }
    activate(email, otp);
    setemail("");
    setotp("");
    
  };
  const resend = (e) =>{
    e.preventDefault();
    if(email.length<2){
        toast.error("Enter valid email");
        return;
    }
    resendo(email);
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <MDBContainer className="d-flex justify-content-center">
        <form
          style={{ width: "23rem", minHeight: "85vh" }}
          onSubmit={Handlesubmit}
        >
          <h2 className="text-center my-3 text-white"><MDBIcon fas icon = "unlock" color="white" className="fa-1x my-2"></MDBIcon> <br /> Activate Account</h2>
          <MDBInput
            contrast
            label="Email"
            id="email formWhite"
            type="email"
            size="lg"
            name="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            className="bg-dark"
            required
          />
          <br />
          <MDBInput
            contrast
            label="Otp"
            id="name formWhite"
            type="text"
            size="lg"
            name="otp"
            value={otp}
            onChange={(e)=>{setotp(e.target.value)}}
            className="bg-dark"
            
          />
          <br />
          <div className="text-center">
          <MDBBtn
            active
            outline
            color="light"
            type="submit"
            className="mx-2"
            onSubmit={Handlesubmit}
          >
            Activate
          </MDBBtn>
          <MDBBtn
            active
            outline
            color="light"
            onClick={resend}
            className="mx-2"
            onSubmit={Handlesubmit}
          >
            Resend Otp
          </MDBBtn>
          </div>
          <br />

          <p className="text-center text-white">
            <Link className="text-white text-decoration-underline" to="/components/Register">
              Back
            </Link>{" "}
          </p>
          <br />
        </form>
      </MDBContainer>
    </div>
  );
};

export default Otpconfirm;
