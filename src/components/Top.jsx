import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

const Top = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Ecommerce Demo{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>
            {" "}
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/products"}>
            {" "}
            Products
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Top;
