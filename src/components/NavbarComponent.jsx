import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link className='navbar-brand' to={'/'}>
          Veterinari d'Italia
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-link' to={'/veterinario'}>
              Veterinario
            </Link>
            <Link className='nav-link' to={'/farmacia'}>
              Farmacia
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>Registrati</Nav.Link>
            <Nav.Link href='#memes'>Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
