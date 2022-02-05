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
import img1 from "C:/Users/ELCOT/Documents/GitHub/REACT_PROJECT/firstproject/src/img/cc.png";

class Sintac extends Component {
  render() {
    return (
      <div>
        <Container fluid className="int">
          <Row>
            <Col lg={3} md={6} sm={4}>
              <div className="intro">
                <h6>+1 (205) 325-1235</h6>
              </div>
            </Col>
            <Col>
              <div className="intro1">
                <h6>4256 Marshville Road, Poughkeepsie, NY 12601</h6>
              </div>
            </Col>
            <Col>
              <div className="intro2">
                <h6>Follow us:</h6>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={1} md={6} sm={4}>
              <div className="sin">
                <h1>Sintac</h1>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col>
                  <p>Future construction</p>
                  <h1>
                    Make your dream home
                    <br />
                    with sintac
                  </h1>
                  <a href="#">get a quote</a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img className="ja" src={img1} />
                </Col>
                <Col>
                  <h1>
                    WE ARE ON EXPERT
                    <br />
                    THIS FIELD BUILDINGS
                    <br />
                    SOLUTIONS SINCE 1974.
                  </h1>
                  <p>
                    Void gathering midst together you're shall. Beast set he
                    <br />
                    likeness spirit winged two all fourth they're gathered
                    <br />
                    seasons very may heaven saying. Fly image th
                  </p>
                  <a href="#">Learn more</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col>
              <h1>What We Provide</h1>
              <p>Together female let signs for for fish fowl may first</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Architecture Design</h5>
              You're which creepeth were yielding
              <br /> kind, divide sixten po gatherin all
              <br /> first fill Seed wherein life. Years one
              <br /> fifth
            </Col>
            <Col>
              <h5>Building Construction</h5>
              You're which creepeth were yielding
              <br /> kind, divide sixten po gatherin all
              <br /> first fill Seed wherein life. Years one
              <br /> fifth
            </Col>
            <Col>
              <h5>Architecture Design</h5>
              You're which creepeth were yielding
              <br /> kind, divide sixten po gatherin all
              <br /> first fill Seed wherein life. Years one
              <br /> fifth
            </Col>
            <Col>
              <h5>Architecture Design</h5>
              You're which creepeth were yielding
              <br /> kind, divide sixten po gatherin all
              <br /> first fill Seed wherein life. Years one
              <br /> fifth
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sintac;
