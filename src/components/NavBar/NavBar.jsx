import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
        <Container className="w-100">
          <a className="navbar-brand" href="/"><Logo /></a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/category">Inicio</NavLink>
              <NavDropdown title="Productos" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/concentrados" className="nav-link">
                    Jugos Concentrados
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/sucedaneos" className="nav-link">
                    Vinagres y Sucedáneos
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/quienes-somos">Quienes somos</NavLink>
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
