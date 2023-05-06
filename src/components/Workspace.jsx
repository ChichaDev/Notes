import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppProvider";

import { Col, Form } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import dbService from "../services/dbService";

export const Workspace = () => {
  const { selectedNoteId, notes } = useContext(AppContext);

  const selectedNote = notes.find((note) => note.id === selectedNoteId);
  const [editedNote, setEditedNote] = useState(null);
  const [saveTimeout, setSaveTimeout] = useState(null);

  useEffect(() => {
    setEditedNote(selectedNote);
  }, [selectedNote]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));

    // Отменить предыдущую задержку сохранения, если она была установлена
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }

    // Установить новую задержку сохранения
    const newSaveTimeout = setTimeout(() => {
      handleNoteUpdate();
    }, 1000);

    setSaveTimeout(newSaveTimeout);
  };

  const handleNoteUpdate = async () => {
    if (editedNote) {
      await dbService.updateNoteById(selectedNoteId, editedNote);
      console.log("Заметка обновлена:", editedNote);
    }
  };

  return (
    <Col md={10}>
      <div>
        {selectedNote ? (
          <Form>
            <Form.Group controlId="noteTitle">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedNote?.title || selectedNote.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="noteDescription">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={editedNote?.description || selectedNote.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        ) : (
          <p>Выберите заметку из списка</p>
        )}
      </div>
    </Col>
  );
};

// import { useContext } from "react";
// import { AppContext } from "../context/AppProvider";

// import { Col } from "react-bootstrap";

// import ReactMarkdown from "react-markdown";

// export const Workspace = () => {
//   const { selectedNoteId, notes } = useContext(AppContext);

//   const selectedNote = notes.find((note) => note.id === selectedNoteId);

//   return (
//     <Col md={10}>
//       <div>
//         {selectedNote ? (
//           <>
//             <h2>{selectedNote.title}</h2>
//             <p>{selectedNote.description}</p>
//             <ReactMarkdown>{selectedNote.content}</ReactMarkdown>
//           </>
//         ) : (
//           <p>Выберите заметку из списка</p>
//         )}
//       </div>
//     </Col>
//   );
// };
