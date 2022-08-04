import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import he from "../img/he.jpg";
import Login from "./Login";
export default function Headers() {
  return (
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{ backgroundImage: `url(${he})`, height: "85vh" }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">CLOUD BOOK</h1>
              <h4 className="mb-3">Mindfulness to work</h4>
              <Link
                className="btn btn-outline-light btn-lg"
                to="/components/Login"
                role="button"
              >
                Sign in
              </Link>
              <Link
                className="btn btn-outline-light btn-lg mx-2"
                to="/components/Register"
                role="button"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
}
