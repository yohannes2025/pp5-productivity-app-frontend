import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Productivity App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <h1>
              Hello, World! <i className="fas fa-camera"></i>
            </h1>
            <Nav.Link>
              <i className="fas fa-sign-in-alt"></i> Login
            </Nav.Link>

            <Nav.Link>
              <i className="fas fa-user-plus"></i> Register
            </Nav.Link>

            <Nav.Link>Profile</Nav.Link>

            <Nav.Link>Tasks</Nav.Link>

            <Nav.Link>Create Task</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
 