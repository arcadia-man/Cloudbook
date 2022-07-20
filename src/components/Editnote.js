import React, { useContext, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBIcon,
  MDBModalFooter,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import noteContext from "../context/NoteContext";
import userContext from "../context/UserContext";
export default function App(props) {
  const { note } = props;
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [state, setstate] = useState({
    title: note.title,
    tag: note.tag,
    description: note.description,
  });
  const { title, tag, description } = state;
  const handlechange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const context = useContext(noteContext);
  const { editnotes } = context;
  const { user } = useContext(userContext);
  const handleonclick = () => {
    editnotes(note._id, title, tag, description, user.jwt);
    setstate({ title: title, tag: tag, description: description });
    toggleShow();
  };
  return (
    <>
      <MDBBtn
        className="mx-2 py-1 px-3"
        color="btn btn-outline-light btn-lg"
        onClick={toggleShow}
      >
        <MDBIcon fas size="1x" color="primary" icon="edit" />
      </MDBBtn>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent className="bg-black text-white">
            <MDBModalHeader>
              <MDBModalTitle>Edit The Note</MDBModalTitle>
              <MDBBtn
                className="btn-close bg-white"
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
                Edit
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
