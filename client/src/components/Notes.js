import { useContext, useEffect } from "react";
import React from "react";
import AddNote from "./AddNote";
import noteContext from "../contexts/notes/notesContext";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const { showAlert } = props;
  const updateNotes = () => {
   
    getNotes(); // Fetch updated notes
  };
  useEffect(() => {
    getNotes();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container my-4 mx-5">
        <h2>Add a note</h2>
        <AddNote showAlert={showAlert} />
      </div>
      <div className="container my-3 mx-5">
        <h2>Your Notes</h2>
        <div className="container mx-2 font-bold">
          {notes.length === 0 && "No notes to display"}
        </div>
        <div className="row my-3">
          {Array.isArray(notes) &&
            notes.map((note) => {
              return (
                <NoteItem
                  note={note}
                  key={note._id}
                  updateNotes={updateNotes}
                  showAlert={showAlert}
                />
              );
            })}
        
        </div>
      </div>
    </>
  );
};

export default Notes;
