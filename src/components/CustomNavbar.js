import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  const isLoggedIn = localStorage.getItem("userData") !== null;

  return (
    <Container fluid>
      <Navbar
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
        }}
        bg="orange"
        data-bs-theme="orange"
        expand="lg"
        className="bg-body-tertiary"
      >
        
        <br />
        
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className="me-auto my-2 my-lg-1 flex-column" style={{ maxHeight: "100px" }} navbarScroll>
          <Navbar.Brand href="/">
          &nbsp;Apollo
          <FontAwesomeIcon fontSize={26} icon={faCoffee} />
          <br />
          
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" style={
          {
            color: "white",
            backgroundColor: "orange",
            padding: "10px"
          }
        
        }/>
            <Nav.Link href="/" style={
          {
            color: "white",
            backgroundColor: "#343a40",
            padding: "10px"
          }
            }>Home</Nav.Link>
            <Nav.Link href="/admin/add-new-product" style={
          {
            color: "white",
            backgroundColor: "orange",
            padding: "10px"
          }
            }>Add Coffees</Nav.Link>
            <Nav.Link href="/user-orders" style={
          {
            color: "white",
            backgroundColor: "#343a40",
            padding: "10px"
          }
            }>Order List</Nav.Link>
            <Nav.Link href="/give-order" style={
          {
            color: "white",
            backgroundColor: "orange",
            padding: "10px"
          }
            }>Give Order</Nav.Link>
          </Nav>
          {!isLoggedIn && (
            <div className="d-flex flex-column">
              <Button href="/sign-up" variant="secondary" className="mb-2">
                Sign Up
              </Button>
              <Button href="/login" variant="dark">
                Login
              </Button>
            </div>
          )}
        </Navbar.Collapse>
       
      </Navbar>
    </Container>
  );
}