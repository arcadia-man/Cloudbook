import noteContext from "./NoteContext";
import { useState ,useContext} from "react";
import { toast } from "react-toastify";

const Notestate = (props) => {
  let initialState = [];
  const host = "http://localhost:5000";
  
  //get al notes
  // const {user} = useContext(userContext);
  const getNotes = async ( token) => {
    try {
      // api call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
        },
      });

      const Json = await response.json();
      // console.log(Json, token);
      setnotes(Json);
      // console.log(notes)
      //instead of push we use concat because it anoly update note but concat update notes and return note also
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  //Add a note
  const addNote = async (title, tag, description, token) => {
    // api call
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
        },
        body: JSON.stringify({ title, tag, description }), // body data type must match "Content-Type" header
      });
      const Json = await response.json();
      // console.log(Json, token);
      if (Json.errors) {
        console.log("false");
        toast.error("Oops, Note not added 🤯");
      } 
      else {
        let newnote = JSON.parse(JSON.stringify(notes.concat(Json)));
        newnote.sort((a, b) => {
          let da = new Date(a.date),
            db = new Date(b.date);
          return db - da;
        });
        // console.log(newnote);
        setnotes(newnote);
        toast.success("Note added👌");
      }
      //instead of push we use concat because it anoly update note but concat update notes and return note also
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  const seenNote = async (id, token) => {
    try {
      const res = await fetch(`${host}/api/notes/seennote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
        },
      });
      if (res.status === 400) {
        toast.error("Note not found");
      }
      if (res.status === 500) {
        toast.error("Check connection");
      }
      if (res.status === 401) {
        toast.error("Not allowed");
      }
      let newNote = JSON.parse(JSON.stringify(notes));
      for (let i = 0; i < newNote.length; i++) {
        if (newNote[i]._id === id) {
          newNote[i].seen = !newNote[i].seen;
          setnotes(newNote);
          if (newNote[i].seen) {
            toast.success("Note has seen.");
          } else {
            toast.success("Note has unseen.");
          }
          break;
        }
      }
    } catch (error) {
      toast.error("Something went worng.");
    }
  };
  //delete a note
  const deletenote = async (id, token) => {
    // api call
    try {
      const response = await fetch(`${host}/api/notes/deletnote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
        },
      });
      // console.log("deleeting th e");
      if (response.status === 400) {
        toast.error("Note not found");
        return false;
      }
      if (response.status === 500) {
        toast.error("Check connection");
        return false;
      }
      if (response.status === 401) {
        toast.error("Not allowed");
        return false;
      }
      const newnote = notes.filter((note) => {
        return note._id !== id;
      });
      setnotes(newnote);
      toast.success("Note deleted");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //Edit a note
  const editnotes = async (id, title, tag, description, token) => {
    //api call
    try {


      const response = await fetch(`${host}/api/notes/udatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : token
        },
        body: JSON.stringify({ title, tag, description }), // body data type must match "Content-Type" header
      });
      const Json = response.json();
      console.log(Json);
      let newNote = JSON.parse(JSON.stringify(notes));
      //logic to edit in clint side.
      for (let i = 0; i < newNote.length; i++) {
        if (newNote[i]._id === id) {
          newNote[i].title = title;
          newNote[i].description = description;
          newNote[i].tag = tag;
          setnotes(newNote);
          toast.success("Note has update.");
          break;
        }
      }
    } catch (error) {
      toast.error("Something went wrong.")
    }
  };

  //for about pages

  const [notes, setnotes] = useState(initialState);
  return (
    // <noteContext.Provider value={{state,update}}>
    <noteContext.Provider
      value={{
        notes,
        setnotes,
        addNote,
        deletenote,
        getNotes,
        editnotes,
        seenNote,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default Notestate;
