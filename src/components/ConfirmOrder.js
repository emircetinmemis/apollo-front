import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
export default function ConfirmOrder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <br></br>
      <h1 className="text-center" style={
        {
          color: "white",
          backgroundColor: "orange",
          padding: "10px"
        }
      
      }>Confirm</h1>
      <br />
      <Row>
        <Table striped bordered hover variant="light" style={
          {
            color: "white",
            backgroundColor: "orange",
            padding: "10px"
          }
        
        }>
          <thead>
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Espresso</td>
              <td>Middle</td>
              <td>1</td>
              <td>Now</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button variant="success" type="submit" onClick={handleShow}>
          Confirm Order
        </Button>
      </Row>
      <Modal show={show} onHide={handleClose} style={

        {
          color: "white",
          backgroundColor: "orange",
          padding: "10px"
        }

        
      }>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
