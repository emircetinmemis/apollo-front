import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(
      "https://emircetinmemis--webhw45-app.modal.run/coffee"
    )
      .then((response) => response.json())
      .then((data) => setCoffees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12}>
            <Card width={512} style={{ border: "none" }}>
              <Card.Body>
                <Card.Text
                  className="h1 text-center"
                  style={{
                    fontSize: "90px",
                    color: "white",
                    backgroundColor: "black",
                    opacity: "0.9",
                    fontWeight: "bold",
                    padding: "20px",
                    background:
                     "orange",

                    borderRadius: "50px",
                  }}
                >
                  Checkout the best options<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12}>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingLeft: "8%",
            paddingBottom: "20px",
          }}
        >
          {coffees.map((coffee, index) => (
            <Col
              key={index}
              md={4}
              style={{
                paddingBottom: "20px",
              }}
            >
              <Card border="dark" style={{ width: "20rem" }}>
                <Card.Header
                  className="text-center"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  <FontAwesomeIcon icon={faStar} /> New
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={"coffee.png"}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{coffee.name}</Card.Title>
                  <Card.Text>
                    Enjoy with your coffee !
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    textAlign: "center",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  S:${coffee.prices.small} - M:${coffee.prices.medium}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
