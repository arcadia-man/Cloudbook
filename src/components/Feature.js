import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import noteContext from "../context/NoteContext";
import userContext from "../context/UserContext";
export default function App() {
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [state, setstate] = useState({
    title: "",
    tag: "",
    description: "",
  });
  const { title, tag, description } = state;
  const handlechange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const context = useContext(noteContext);
  const { addNote, notes } = context;
  const { user } = useContext(userContext);
  const handleonclick = () => {
    addNote(title, tag, description, user.jwt);
    setstate({ title: "", tag: "", description: "" });
    toggleShow();
  };
  return (
    <>
      <MDBContainer
        className="d-flex justify-content-center flex-column "
        style={{ maxWidth: "300px" }}
      >
        <MDBBtn
          className="my-5"
          color="btn btn-outline-light btn-lg"
          onClick={toggleShow}
        >
          Add a Note
        </MDBBtn>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent className="bg-black text-white">
              <MDBModalHeader>
                <MDBModalTitle>Add A Note</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color=""
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBInput
                  contrast
                  label="Name"
                  id="title formWhite"
                  type="text"
                  size="lg"
                  name="title"
                  value={state.title}
                  onChange={handlechange}
                  className="bg-dark"
                ></MDBInput>
                <br />
                <MDBInput
                  contrast
                  label="Tag"
                  id="tag formWhite"
                  type="text"
                  size="lg"
                  name="tag"
                  value={state.tag}
                  onChange={handlechange}
                  className="bg-dark"
                ></MDBInput>
                <br />
                <MDBTextArea
                  contrast
                  label="description"
                  id="textAreaExample formWhite"
                  type="text"
                  size="lg"
                  name="description"
                  value={state.description}
                  onChange={handlechange}
                  className="bg-dark"
                ></MDBTextArea>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn
                  color="btn btn-outline-light btn-lg "
                  onClick={toggleShow}
                >
                  Close
                </MDBBtn>
                <MDBBtn
                  color="btn btn-outline-light btn-lg"
                  onClick={handleonclick}
                >
                  Add
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </MDBContainer>
    </>
  );
}
