import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
function NavigationBar() {
  return (
    <>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Admin</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/Dasboard">
                  Dasboard
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
