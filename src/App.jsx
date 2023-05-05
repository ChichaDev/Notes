import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import {
  BsPlusSquare,
  BsTrash,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";

function App() {
  const [notes, setNotes] = useState([
    { title: "Note 1", content: "Note 1 content" },
    { title: "Note 2", content: "Note 2 content" },
    { title: "Note 3", content: "Note 3 content" },
  ]);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Button variant="outline-primary" className="mr-2">
              <BsPlusSquare className="mr-1" />
              Add Note
            </Button>
            <Button variant="outline-danger" className="mr-2">
              <BsTrash className="mr-1" />
              Delete Note
            </Button>
            <Button variant="outline-secondary">
              <BsPencilSquare className="mr-1" />
              Edit Note
            </Button>
          </Nav>
          <form className="d-flex ms-auto">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search notes"
                aria-label="Search notes"
              />
              <Button variant="outline-secondary">
                <BsSearch />
              </Button>
            </InputGroup>
          </form>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col md={2} className="bg-dark">
          <div className="d-flex flex-column justify-content-between vh-100 text-white">
            <div className="p-3">
              {notes.map((note) => (
                <div className="mb-2" key={note.title}>
                  <Button variant="light" className="w-100 text-left">
                    {note.title}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={10}>
          <div className="p-3">
            <h2 className="mb-3">Note title</h2>
            <p className="lead">Note content</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// import { BsPlusSquare, BsTrash, BsPencilSquare } from 'react-icons/bs';
// import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-2 bg-dark">
//           <div className="d-flex flex-column justify-content-between vh-100">
//             <div className="p-3">
//               <h3 className="text-white">Notes</h3>
//             </div>
//             <div className="p-3">
//               <Button variant="light" className="w-100 mb-2">
//                 <BsPlusSquare className="mr-2" />
//                 Add Note
//               </Button>
//               <Button variant="light" className="w-100 mb-2">
//                 <BsTrash className="mr-2" />
//                 Delete Note
//               </Button>
//               <Button variant="light" className="w-100 mb-2">
//                 <BsPencilSquare className="mr-2" />
//                 Edit Note
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-10">
//           <div className="p-3">
//             <form>
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search notes"
//                   aria-label="Search notes"
//                   aria-describedby="basic-addon2"
//                 />
//                 <button className="btn btn-outline-secondary" type="button">
//                   Search
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="p-3">
//             <h2 className="mb-3">Note title</h2>
//             <p className="lead">Note content</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
