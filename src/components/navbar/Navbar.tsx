import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="rounded navbar-dark " expand="lg">
      <Navbar.Brand className="text-light " href="#home"></Navbar.Brand>

      <Navbar.Toggle
        className="text-light ml-auto custom-toggler"
        aria-controls="basic-navbar-nav "
      />
      <Navbar.Collapse className="" id="basic-navbar-nav ">
        <Nav className="ml-auto text-right">
          <Nav.Link className="text-light " href="#aboutme">
            About
            <div className="underscore"></div>
          </Nav.Link>

          <Nav.Link className="text-light " href="#portfolio">
            Portfolio
            <div className="underscore"></div>
          </Nav.Link>
          <Nav.Link className="text-light " href="#blog">
            Blog
            <div className="underscore"></div>
          </Nav.Link>
          <Nav.Link className="text-light " href="#contact">
            Contact
            <div className="underscore"></div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
