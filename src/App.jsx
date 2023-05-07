import { AppBar } from "./components/AppBar";
import { SideBar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";

import { AppProvider } from "./context/AppProvider";

import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <AppProvider>
      <Container fluid>
        <AppBar />
        <Row>
          <SideBar />
          <Workspace />
        </Row>
      </Container>
    </AppProvider>
  );
}

export default App;
