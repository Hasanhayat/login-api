import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import { GlobalContext } from "../context/Context";
import { Button } from "@mui/material";

const Top = () => {
  const { state, logout } = useContext(GlobalContext);

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
        {state.isLogin ? (
          <>
            <img
              src={state.user.image}
              width="30"
              height="30"
              className="d-inline-block align-top mx-1"
              alt="profile"
            />
            <Button variant="outlined" onClick={logout}>Logout</Button>
          </>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default Top;
