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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDdlNzA0ODYzNjA4MWE3MjFkNmVkIn0sImlhdCI6MTY5NjUwNTYyOX0.HCdOxFOTw9xTfBpJNUZSngNosWV-c4Zm3D53qqzt004",
      }
    });
    const data = await response.json();
    // console.log(data);
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDdlNzA0ODYzNjA4MWE3MjFkNmVkIn0sImlhdCI6MTY5NjUwNTYyOX0.HCdOxFOTw9xTfBpJNUZSngNosWV-c4Zm3D53qqzt004",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response.json())
    const note = {
      _id: "65e8962940bd417cda56fe70",
      user: "651d7e7048636081a721d6ed",
      title: title,
      description: description,
      tag: tag,
      date: "2024-03-06T16:13:29.570Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = async (id) => {
    //Todo:api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDdlNzA0ODYzNjA4MWE3MjFkNmVkIn0sImlhdCI6MTY5NjUwNTYyOX0.HCdOxFOTw9xTfBpJNUZSngNosWV-c4Zm3D53qqzt004",
      },
    });
    const json = response.json();
    console.log(json);
    //Client side
    console.log(`Deleting note with id :${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const updateNote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDdlNzA0ODYzNjA4MWE3MjFkNmVkIn0sImlhdCI6MTY5NjUwNTYyOX0.HCdOxFOTw9xTfBpJNUZSngNosWV-c4Zm3D53qqzt004",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    console.log(json);

    //Todo:api callw
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, updateNote, deleteNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
