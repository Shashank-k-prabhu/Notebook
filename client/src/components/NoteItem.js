import React, { useContext, useState } from "react";
import noteContext from "../contexts/notes/notesContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NoteItem = (props) => {
  const { note, updateNotes,showAlert } = props;
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;

  // Modal state and functions
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Update note state
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    description: note.description,
    tag: note.tag,
  });

  // Function to handle update note
  const handleUpdateNote = () => {
    editNote(
      note._id,
      updatedNote.title,
      updatedNote.description,
      updatedNote.tag
    );
   
    updateNotes();
    showAlert("Note updated successfully", "success");
    handleCloseModal(); // Close modal after updating note
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setUpdatedNote({
      ...updatedNote,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Note deleted successfully", "success");
              }}
            ></i>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              id="updateNote"
              onClick={handleShowModal}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>

      {/* Modal for updating note */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updateNoteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={updatedNote.title}
                onChange={handleInputChange}
                minLength={3}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateNoteDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={updatedNote.description}
                onChange={handleInputChange}
                minLength={5}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateNoteDescription">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                placeholder="Enter Tag"
                name="tag"
                value={updatedNote.tag}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateNote}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NoteItem;
