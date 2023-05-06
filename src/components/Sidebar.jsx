import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppProvider";

import { Col, ListGroup } from "react-bootstrap";

import { ListItem } from "./ListItem";

export const SideBar = () => {
  const { notes, getAllNotes } = useContext(AppContext);

  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  return (
    <Col md={2} className="bg-dark">
      <div className="d-flex flex-column justify-content-between vh-100 text-white">
        <div className="p-3">
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
        </div>
      </div>
    </Col>
  );
};
