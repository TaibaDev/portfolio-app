import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookSquare,FaLinkedin, FaGithubSquare} from 'react-icons/fa';
function HeaderNav() {

  return (
    <section className='navv'>
    <Navbar bg="" variant="" navv expand="lg">
      <Container>
        <Navbar.Brand href="/">PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href="/services">Services</Nav.Link>
            <Nav.Link className='link' href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <h2><Nav.Link className='icons' href="https://github.com/TaibaDev"> <FaGithubSquare/> </Nav.Link></h2>
            <h2><Nav.Link className='icons' href="https://www.facebook.com/tayyab.sadiq.75/"> <FaFacebookSquare/> </Nav.Link></h2>
            <h2><Nav.Link className='icons' href="https://www.linkedin.com/in/tayyab-sadiq-1531a5177"><FaLinkedin/></Nav.Link></h2>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default HeaderNav;