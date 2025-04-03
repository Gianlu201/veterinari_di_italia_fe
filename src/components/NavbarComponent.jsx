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
            <Link to='registrazione' className='nav-link'>
              Registrati
            </Link>
            <Link to='accedi' className='nav-link'>
              Accedi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
