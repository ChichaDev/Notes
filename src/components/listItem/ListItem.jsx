import { useContext, useState } from "react";

import { AppContext } from "../../context/AppProvider";

import { Card } from "react-bootstrap";

import "./ListItem.css";

export const ListItem = ({ id, title, description }) => {
  const [selected, setSelected] = useState(false);

  const { selectedNoteId, setSelectedNoteId, setIsNoteSelected } =
    useContext(AppContext);

  const isSelected = selectedNoteId === id;

  const handleClickNotes = () => {
    setSelected(!selected);

    setSelectedNoteId((prevSelectedNoteId) =>
      prevSelectedNoteId === id ? null : id
    );

    setIsNoteSelected(false);
  };

  const truncatedDescription =
    description.length > 20 ? description.slice(0, 20) + "..." : description;

  return (
    <div className="mb-2">
      <Card
        bg={isSelected ? "secondary" : "light"}
        text={isSelected ? "white" : "dark"}
        border="secondary"
        onClick={handleClickNotes}
        className="hover-card"
      >
        <Card.Body>
          <Card.Title className="text-dark font-weight-bold">
            <span className="truncate-text">{title}</span>
          </Card.Title>
          <Card.Text className="text-dark fs-6 small">
            <span className="truncate-text">{truncatedDescription}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
