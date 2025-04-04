import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
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

  const login = (tokenInfo) => {
    const data = JSON.parse(tokenInfo);

    const tokenDecoded = jwtDecode(data.token);

    const userInfos = {
      aud: tokenDecoded.aud,
      exp: tokenDecoded.exp,
      role: tokenDecoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
      email:
        tokenDecoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ],
      fullName:
        tokenDecoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ],
      id: tokenDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
      iss: tokenDecoded.iss,
      expiration: data.expires,
    };

    dispatch({
      type: 'SET_LOGGED_USER',
      payload: userInfos,
    });
  };

  useEffect(() => {
    var tokenInfo = localStorage.getItem('veterinari_token');

    if (tokenInfo) {
      login(tokenInfo);
    }

    console.log(tokenInfo);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-lg-primary"
      //style={{ backgroundColor: "#56C7D7" }}
    >
      <Container>
        <Link className="navbar-brand text-primary" to={"/"}>
          Benessere Animali
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={"/"}>
              Patologie e Disturbi
            </Link>
            <Link className="nav-link" to={"/farmacia"}>
              Farmacia
            </Link>
            <Link className="nav-link" to={"/veterinario"}>
              Trattamenti e Terapie
            </Link>
            <Link className="nav-link" to={"/veterinario"}>
              Lavora con noi
            </Link>
            <Link className="nav-link" to={"/veterinario"}>
              Eventi
            </Link>
            <Link className="nav-link" to={"/veterinario"}>
              Contatti
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
                <Link to='signIn' className='nav-link'>
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
