// import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <Navbar bg="light" expand="md" fixed="top">
//       <container>
//         <Navbar.Brand href="#home">Productivity App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="../Auth/Login.jsx">Login</Nav.Link>
//             <Nav.Link href=".components/Auth/">Register</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </container>
//     </Navbar>
//   );
// };

// export default NavBar;
 

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Productivity App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Login</Nav.Link>
//             <Nav.Link href="#action2">Register</Nav.Link>
//             <NavDropdown title="Tasks" id="navbarScrollingDropdown">

//               <NavDropdown.Item href="#action3">Create Task</NavDropdown.Item> 
//               <NavDropdown.Item href="#action4">
//                 Task List
//               </NavDropdown.Item>

//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Task Detail
//               </NavDropdown.Item>
//             </NavDropdown>
            
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         {/* Left aligned Brand */}
//         <Navbar.Brand href="#">Productivity App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="ml-auto my-2 my-lg-0" // ml-auto to push items to the right
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             {/* Right aligned Links */}
//             <Nav.Link href="#login">Login</Nav.Link>
//             <Nav.Link href="#register">Register</Nav.Link>
//             <NavDropdown title="Tasks" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#create-task">
//                 Create Task
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#task-list">Task List</NavDropdown.Item>
//               {/* <NavDropdown.Divider /> */}
//               <NavDropdown.Item href="#task-detail">
//                 Task Detail
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React from "react";
//import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.ico";


function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink
          exact
          to="/"
          className={styles.NavLink}
          activeClassName={styles.active}
        >
          {/* Left-aligned Brand */}
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
            Productivity
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Push navigation items to the right */}
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <NavLink
              to="/login"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-right-to-bracket"></i>Login
            </NavLink>
            <NavLink
              to="/register"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-registered"></i>Register
            </NavLink>
            <NavLink
              to="/profile"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              <i class="fa-solid fa-user"></i>Profile
            </NavLink>

            <NavDropdown
              title={
                <span className={styles.NavLink}>
                  <i className="fa-solid fa-check"></i> Tasks
                </span>
              }
              id="navbarScrollingDropdown"
              className={styles.NavDropdown}
            >
              <NavDropdown.Item
                as={NavLink}
                to="/createtask"
                activeClassName={styles.active}
              >
                <i className="fa-solid fa-plus"></i> Create Task
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/tasklist"
                activeClassName={styles.active}
              >
                <i className="fa-solid fa-list-check"></i> Task List
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/taskdetail"
                activeClassName={styles.active}
              >
                <i className="fa-solid fa-circle-info"></i> Task Detail
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
