import { useContext, useState } from "react";

import { AppContext } from "../context/AppProvider";

import { Card } from "react-bootstrap";

import "./ListItem.css";

export const ListItem = ({ id, title, description }) => {
  const [selected, setSelected] = useState(false);

  const { selectedNoteId, setSelectedNoteId } = useContext(AppContext);

  const handleClickNotes = () => {
    setSelected(!selected);
    setSelectedNoteId(selected ? null : id);
    console.log(id);
  };

  return (
    <div className="mb-2">
      <Card
        bg={selectedNoteId === id ? "secondary" : "light"}
        text={selectedNoteId === id ? "white" : "dark"}
        border="secondary"
        onClick={handleClickNotes}
        className="hover-card"
      >
        <Card.Body>
          <Card.Title className="text-dark font-weight-bold">
            {title}
          </Card.Title>
          <Card.Text className="text-dark fs-6 small">{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
