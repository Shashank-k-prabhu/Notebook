import React, { useState } from "react";
import noteContext from "./notesContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "655e4d66ac59cd42bed4e499",
      user: "651d7e7048636081a721d6ed",
      title: "My Title ",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-22T18:50:14.536Z",
      __v: 0,
    },
    {
      _id: "65e8962940bd417cba56fe70",
      user: "651d7e7048636081a721d6ed",
      title: "second note ",
      description: "Second note test",
      tag: "personal",
      date: "2024-03-06T16:13:29.570Z",
      __v: 0,
    },
    {
      _id: "655e4d66ac59cd42bed4e499",
      user: "651d7e7048636081a721d6ed",
      title: "My Title ",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-22T18:50:14.536Z",
      __v: 0,
    },
    {
      _id: "65e8962940bd417cba56fe70",
      user: "651d7e7048636081a721d6ed",
      title: "second note ",
      description: "Second note test",
      tag: "personal",
      date: "2024-03-06T16:13:29.570Z",
      __v: 0,
    },
    {
      _id: "655e4d66ac59cd42bed4e499",
      user: "651d7e7048636081a721d6ed",
      title: "My Title ",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-22T18:50:14.536Z",
      __v: 0,
    },
    {
      _id: "65e8962940bd417cba56fe70",
      user: "651d7e7048636081a721d6ed",
      title: "second note ",
      description: "Second note test",
      tag: "personal",
      date: "2024-03-06T16:13:29.570Z",
      __v: 0,
    },
    {
      _id: "655e4d66ac59cd42bed4e499",
      user: "651d7e7048636081a721d6ed",
      title: "My Title ",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-22T18:50:14.536Z",
      __v: 0,
    },
    {
      _id: "65e8962940bd417cba56fe70",
      user: "651d7e7048636081a721d6ed",
      title: "second note ",
      description: "Second note test",
      tag: "personal",
      date: "2024-03-06T16:13:29.570Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
