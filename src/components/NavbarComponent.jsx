import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    localStorage.removeItem('veterinari_token');
  };

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
            {profile.fullName ? (
              <div className='d-flex align-items-center'>
                <span>{profile.fullName}</span>
                <Button
                  className='nav-link'
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link to='registrazione' className='nav-link'>
                  Registrati
                </Link>
                <Link to='login' className='nav-link'>
                  Accedi
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
