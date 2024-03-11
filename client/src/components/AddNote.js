import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import noteContext from "../contexts/notes/notesContext";
import { useContext, useState } from "react";

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const { showAlert } = props;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    addNote(note.title, note.description, note.tag);
    showAlert("Note added successfully", "success");
    setNote({
      title: "",
      description: "",
      tag: "",
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <Form className="my-3" >
      <Form.Group className="mb-3 w-75">
        <Form.Label className="">Title</Form.Label>
        <Form.Control
          placeholder="Title....(Minimum 3 characters)"
          onChange={onChange}
          id="title"
          name="title"
          minLength={3}
          required
          value={note.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description....(Minimum 5 characters)"
          id="description"
          name="description"
          onChange={onChange}
          minLength={5}
          required
          value={note.description}
        />
      </Form.Group>
      <Form.Group className="mb-3 w-25">
        <Form.Label>Tag</Form.Label>
        <Form.Control
          placeholder="Tag...."
          id="tag"
          name="tag"
          onChange={onChange}
          value={note.tag}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        disabled={note.title.length < 5 || note.description.length < 5}
      >
        Add Note
      </Button>
    </Form>
  );
}

export default AddNote;
