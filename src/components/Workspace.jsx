import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import ReactMarkdown from "react-markdown";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { BsPencilSquare } from "react-icons/bs";

export const Workspace = () => {
  const { selectedNoteId, notes, handleNoteUpdate, isEditing, setIsEditing } =
    useContext(AppContext);

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  const [title, setTitle] = useState(selectedNote?.title || "");
  const [description, setDescription] = useState(
    selectedNote?.description || ""
  );

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    }
  }, [selectedNote, selectedNoteId]);

  console.log("Workspace component");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);

    const updatedNote = {
      ...selectedNote,
      title: e.target.value,
    };
    handleNoteUpdate(updatedNote);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);

    const updatedNote = {
      ...selectedNote,
      description: e.target.value,
    };
    handleNoteUpdate(updatedNote);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Col md={9}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {selectedNote ? (
          isEditing ? (
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <Form.Control
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
              <Form.Control
                as="textarea"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          ) : (
            <div>
              <h2>{selectedNote.title}</h2>
              <ReactMarkdown>{selectedNote.description}</ReactMarkdown>
            </div>
          )
        ) : (
          <p>Select a note from the list</p>
        )}
        <Button
          variant="outline-secondary"
          onClick={handleEditClick}
          className="mt-3"
        >
          <BsPencilSquare />
        </Button>
      </div>
    </Col>
  );
};
