import { Container, Row } from "react-bootstrap";
import { AppBar } from "./components/AppBar";
import { SideBar } from "./components/Sidebar";
import { Workspace } from "./components/Workspace";

import { AppProvider } from "./context/AppProvider";

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
