import { Navbar, Nav, Button } from "react-bootstrap";
import { BsPlusSquare, BsTrash, BsPencilSquare } from "react-icons/bs";
import { SearchBox } from "./SearchBox ";

export const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center justify-content-center"
          >
            <BsPlusSquare className="mr-1 " />
          </Button>

          <Button
            variant="outline-secondary"
            className="d-flex align-items-center justify-content-center"
          >
            <BsTrash className="mr-1" />
          </Button>

          <Button
            variant="outline-secondary"
            className="d-flex align-items-center justify-content-center"
          >
            <BsPencilSquare className="mr-1" />
          </Button>
        </Nav>

        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  );
};
