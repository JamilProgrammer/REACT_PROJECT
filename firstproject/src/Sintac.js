import React, { Component } from "react";
import "./Sintac.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Accordion,
  Carousel,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
class Sintac extends Component {
  render() {
    return (
      <div>
        <Container className="int">
          <Row>
            <Col>
              <div className="intro">
                <i>+1 (205) 325-1235</i>
              </div>

              <div className="intro1">
                <p>4256 Marshville Road, Poughkeepsie, NY 12601</p>
              </div>
            </Col>
            <Col>
              <div className="intro2"></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sintac;
