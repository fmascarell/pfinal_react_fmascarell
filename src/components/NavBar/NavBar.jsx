import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary fixed-top"
      >
        <Container className="w-100">
          <NavLink className="navbar-brand" href="/">
            <Logo />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
              <NavDropdown title="Productos" id="collapsible-nav-dropdown">
                <NavDropdown.Item eventKey="1">
                  <NavLink to="/category/jugos" className="nav-link">
                    Jugos Concentrados
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <NavLink to="/category/sucedaneos" className="nav-link">
                    Vinagres y Sucedáneos
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/quienes-somos">
                Quienes somos
              </NavLink>
            </Nav>
            <Nav>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
