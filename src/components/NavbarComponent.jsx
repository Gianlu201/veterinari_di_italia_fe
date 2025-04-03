import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
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
            <Nav.Link href="#deets">Registrati</Nav.Link>
            <Nav.Link href="#memes">Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
