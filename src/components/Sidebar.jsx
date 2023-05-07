import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";
import { Col, ListGroup } from "react-bootstrap";
import { ListItem } from "./ListItem";

export const SideBar = () => {
  const { notes, getAllNotes, hasFilteredNotes } = useContext(AppContext);

  useEffect(() => {
    if (notes.length === 0) {
      getAllNotes();
    }
  }, [notes, getAllNotes]);

  return (
    <Col md={3}>
      <div className="d-flex flex-column justify-content-between vh-100 text-white">
        <div
          className="p-3 overflow-auto"
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.1)",
            maxHeight: "calc(100vh - 80px)",
            borderRadius: "8px",
          }}
        >
          {notes.length === 0 || !hasFilteredNotes ? (
            <p className="text-muted text-center">Notes not found</p>
          ) : (
            <ListGroup>
              {notes.map((note) => (
                <ListItem
                  key={note.id}
                  title={note.title}
                  description={note.description}
                  id={note.id}
                />
              ))}
            </ListGroup>
          )}
        </div>
      </div>
    </Col>
  );
};
