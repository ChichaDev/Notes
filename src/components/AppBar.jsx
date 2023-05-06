import { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

import { Navbar, Nav, Button } from "react-bootstrap";

import { BsPlusSquare, BsTrash, BsPencilSquare } from "react-icons/bs";

import { SearchBox } from "./SearchBox ";
import { ModalDelete } from "./ModalDelete";

export const AppBar = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { handleNoteDelete, handleNoteEdit, handleNoteAdd } =
    useContext(AppContext);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  return (
    <Navbar bg="light" expand="lg">
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
          >
            <BsTrash className="mr-1" />
          </Button>

          <Button
            variant="outline-secondary"
            className="d-flex align-items-center justify-content-center"
            onClick={handleNoteEdit}
          >
            <BsPencilSquare className="mr-1" />
          </Button>
        </Nav>

        <SearchBox />
      </Navbar.Collapse>

      <ModalDelete
        handleNoteDelete={handleNoteDelete}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
    </Navbar>
  );
};
