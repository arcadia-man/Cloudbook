import React from "react";
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div>
      <MDBFooter className="bg-black text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#3b5998" }}
              href="https://www.facebook.com/profile.php?id=100013431428382"
            >
              <MDBIcon fab icon="facebook-f" size="lg" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#55acee" }}
              href="https://twitter.com/kumar_mau2?t=pJFnAAYm1Yj-JtlIh3w8RA&s=09"
            >
              <MDBIcon fab icon="twitter" size="lg" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#ac2bac" }}
              href="https://www.instagram.com/pyare_prtm/"
            >
              <MDBIcon fab icon="instagram" size="lg" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#ac2bac" }}
              href="https://www.linkedin.com/in/pritam-kumar-maurya-3b370820a"
            >
              <MDBIcon fab icon="linkedin" size="lg" />
            </MDBBtn>
            
        
            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#ac2bac" }}
              href="https://github.com/arcadia-man"
            >
              <MDBIcon fab icon="github" size="lg" />
            </MDBBtn>
            
          </section>
        </MDBContainer>
        <br style={{ color: "white", width: "100%" }} />
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: ii.com
        </div>
      </MDBFooter>
    </div>
  );
}
