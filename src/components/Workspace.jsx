import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

import { Col } from "react-bootstrap";

export const Workspace = () => {
  const { selectedNoteId, notes } = useContext(AppContext);

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  return (
    <Col md={10}>
      <div>
        {selectedNote ? (
          <>
            <h2>{selectedNote.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: selectedNote.content }}
            ></div>
          </>
        ) : (
          <p>Выберите заметку из списка</p>
        )}
      </div>
    </Col>
  );
};
