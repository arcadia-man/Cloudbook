import React, { useContext } from "react";
import noteContext from "../context/NoteContext";
import Shownote from "./Shownote";
import Editnote from "./Editnote";
import {
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import userContext from "../context/UserContext";
function Noteitems(props) {
  const { note } = props;
  const context = useContext(noteContext);
  const { deletenote, editnotes, seenNote } = context;
  const {user} = useContext(userContext);
  return (
    <div className="col-md-4">
      <MDBCard className="m-3 bg-dark">
        <MDBCardBody>
          <MDBCardTitle className="text-white">
            {note.title[0].toUpperCase() + note.title.substring(1)}
          </MDBCardTitle>
          <MDBCardTitle className="text-white">
            {note.tag[0].toUpperCase() + note.tag.substring(1)}
          </MDBCardTitle>
          <MDBCardText className="text-white">
            {note.description.length > 20
              ? `${note.description.substring(0, 19)}...`
              : note.description}
          </MDBCardText>
          <div className="d-flex justify-content-center">
            <MDBBtn
              outline
              className="mx-2 py-1 px-3"
              onClick={() => {
                seenNote(note._id, user.jwt);
              }}
              color={note.seen ? "black" : "white"}
            >
              <MDBIcon
                fas
                size="33%"
                color={note.seen ? "black" : "white"}
                icon="eye"
              />{" "}
            </MDBBtn>
            <MDBBtn
              onClick={() => {
                deletenote(note._id, user.jwt);
              }}
              outline
              className="mx-2 py-1 px-3 "
              color="white"
            >
              <MDBIcon fas color="danger" icon="trash" />
            </MDBBtn>
          </div>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex justify-content-center">
            <Shownote note={note} />
            <Editnote note={note}/>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
}

export default Noteitems;
