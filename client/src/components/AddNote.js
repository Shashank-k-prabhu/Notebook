import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../contexts/notes/notesContext";
import { useContext, useRef, useState } from "react";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const formRef = useRef(null);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding note", note);
    addNote(note.title, note.description, note.tag);
    formRef.current.reset();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <Form className="my-3" ref={formRef}>
      <Form.Group className="mb-3 w-75">
        <Form.Label className="">Title</Form.Label>
        <Form.Control
          placeholder="Title...."
          onChange={onChange}
          id="title"
          name="title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description...."
          id="description"
          name="description"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 w-25">
        <Form.Label>Tag</Form.Label>
        <Form.Control
          placeholder="Tag...."
          id="tag"
          name="tag"
          onChange={onChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Add Note
      </Button>
    </Form>
  );
}

export default AddNote;
