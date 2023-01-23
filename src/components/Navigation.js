import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#Hero">MAN KOTA TEGAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Jurusan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ipa</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ips</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Agama</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
