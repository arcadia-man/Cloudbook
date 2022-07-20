import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App(props) {
  const { note } = props;
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  
  return (
    <>
    {/* <div style={{backgroundImage : URL("https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") }}> */}
      <MDBBtn
        className="py-1 px-3 mx-2"
        color="btn btn-outline-light btn-lg"
        onClick={toggleShow}
      >
        <MDBIcon fas icon="expand" />
      </MDBBtn>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent className="bg-black text-white">
          
            <MDBModalHeader>
              <MDBModalTitle>{(note.title).toUpperCase()}</MDBModalTitle><MDBBtn
                className="btn-close bg-white"
                color=""
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4>{note.tag}</h4>
              <br />
              <p >{note.description}</p>
              <br />
              {/* <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="loading" width ="100%" /> */}
            
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="btn btn-outline-light btn-lg "
                onClick={toggleShow}
              >
                Close
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* </div> */}
    </>
  );
}
