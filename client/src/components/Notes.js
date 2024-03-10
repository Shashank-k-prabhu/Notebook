import { useContext, useEffect } from "react";
import React from "react";
import AddNote from "./AddNote";
import noteContext from "../contexts/notes/notesContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
    console.log(notes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container my-4 mx-5">
        <h2>Add a note</h2>
        <AddNote />
      </div>
      <div className="container my-3 mx-5">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {Array.isArray(notes) &&
            notes.map((note) => {
              return <NoteItem note={note} key={note._id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Notes;
