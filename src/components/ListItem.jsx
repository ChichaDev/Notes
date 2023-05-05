import React from "react";
import { Card } from "react-bootstrap";

export const ListItem = ({ title, description }) => {
  return (
    <div className="mb-2">
      <Card bg="light" border="secondary">
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
