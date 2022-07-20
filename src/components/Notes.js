import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/NoteContext";
import userContext from "../context/UserContext";
import Noteitems from "./Noteitems";

function Notes() {
  const context = useContext(noteContext);
  const { user } = useContext(userContext)
  const {notes, getNotes } = context;

  useEffect(() => {
    getNotes(user.jwt);
    return()=>{}
  }, []);
  return (
    <div>
      <MDBContainer >
        <h2 className="text-center py-3 text-white">Your Note</h2>
        <MDBRow>   
          {/* {console.log(notes)} */}
          {notes.map((note) => {
            return <Noteitems key={note._id} note={note} />;
          })}
        </MDBRow>
        <div className=""></div>
      </MDBContainer>
    </div>
  );
}

export default Notes;
