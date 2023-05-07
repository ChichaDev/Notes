import { useContext, useState } from "react";

import { AppContext } from "../context/AppProvider";

import { SearchBox } from "./SearchBox ";
import { ModalDelete } from "./ModalDelete";

import { Navbar, Nav, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { BsPlusSquare, BsTrash } from "react-icons/bs";

export const AppBar = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { handleNoteDelete, handleNoteAdd, notes, isNoteSelected } =
    useContext(AppContext);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Button
              variant="outline-secondary"
              className="d-flex align-items-center justify-content-center"
              onClick={handleNoteAdd}
            >
              <BsPlusSquare className="mr-1 " />
            </Button>

            <Button
              variant="outline-secondary"
              className="d-flex align-items-center justify-content-center"
              onClick={handleDeleteClick}
              disabled={isNoteSelected || notes.length === 0}
            >
              <BsTrash className="mr-1" />
            </Button>
          </Nav>

          <SearchBox />
        </Navbar.Collapse>

        <ModalDelete
          handleNoteDelete={handleNoteDelete}
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
        />
      </Container>
    </Navbar>
  );
};
