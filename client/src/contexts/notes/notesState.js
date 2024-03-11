import React, { useState } from "react";
import noteContext from "./notesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = {};
  //Get all Notes
  const getNotes = async () => {
    //todo:api call
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
      },
    });
    const data = await response.json();
  
    setNotes(data);
  };
  //Add Note
  const addNote = async (title, description, tag) => {
    //todo:api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
   
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = async (id) => {
    //Todo:api call
     await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
      },
    });
    // const json = response.json();

    //Client side
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //Api call
     await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // const json = response.json();
    

    //Todo:api callw
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
      break;
    }
    setNotes(newNotes);
  };

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
