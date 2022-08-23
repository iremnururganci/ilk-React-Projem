import React, { Component } from "react";

import {
  CardSubtitle,
  CardTitle,
  CardBody,
  CardText,
  Card,
  Button,
  Container,
  Row,
  Col,
  Input,
  Nav,
  CardGroup,
  CardImg,
  Label,
} from "reactstrap";
import "./Dashboard.css";

export default function ShoppingCart() {
  
  return (
    <div>
      <Row>
        <h3 style={{ color: "#98504B" }} className="text-center mb-5 mt-4 ">
          "Shopping Cart"
        </h3>
      </Row>

      <Container>
        <Row className="mt-5">
          <Col>
            <img alt="Card image" src="https://picsum.photos/300/200" />
          </Col>
          <Col>Name</Col>
          <Col>Price</Col>
          <Col>Amout</Col>
          <Col>Total Price</Col>
          <Col>
            <Button style={{ background: "red" }}>Remove</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Label>
              <h3>
                Total Price:{" "}
                <Input type="text" className="w-50">
                  555
                </Input>
              </h3>
            </Label>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="d-flex justify-content-center ">
          <Button variant=" w-50" style={{ backgroundColor: "#64AB3D" }}>
            Payment
          </Button>
        </Col>
      </Row>
    </div>
  );
}
