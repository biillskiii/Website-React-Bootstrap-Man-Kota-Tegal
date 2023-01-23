import {Navbar, Container} from 'react-bootstrap';
const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="https://instagram.com/mankotategal">Man Kota Tegal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='col-lg-6 col-9'>
            Copyright Allright reserved <a href="https://instagram.com/biillskiii" target={'_blank'} rel="noreferrer">Mohammad Nabiel Dwi Ananda</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Footer;
