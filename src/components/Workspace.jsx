import { Col } from "react-bootstrap";

export const Workspace = () => {
  return (
    <Col md={10}>
      <div className="p-3">
        <h2 className="mb-3">Note title</h2>
        <p className="lead">Note content</p>
      </div>
    </Col>
  );
};
