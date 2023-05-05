import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { AppBar } from "./components/AppBar";
import { SideBar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Lorem lorem lorevv", description: "Note 1 content" },
    { id: 2, title: "Note 2", description: "Note 2 content" },
    { id: 3, title: "Note 3", description: "Note 3 content" },
  ]);

  return (
    <Container fluid>
      <AppBar />
      <Row>
        <SideBar notes={notes} />

        <Workspace />
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
