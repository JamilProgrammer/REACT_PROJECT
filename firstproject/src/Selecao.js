import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/im.png";
import "./Selecao.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import {} from 'reactstrap';
import Mujamil from "./prop";
function Selecao(props) {
  return (
    <div>
      {/* <Mujamil name="hisham" para="mujamil"/> */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
            height={520}
            width={20}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Second slide"
            height={520}
            width={20}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Third slide"
            height={520}
            width={20}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="navbar">
        <h1 className="navbarh11">Selecao</h1>
        <ul className="ul1">
          <li className="linav1">Home</li>
          <li className="linav2">About</li>
          <li className="linav3">Services</li>
          <li className="linav4">Portfolio</li>
          <li className="linav5">Pricing</li>
          <li className="linav6">Team</li>
          <li className="linav7">Drop Down</li>
          <li className="linav8">Contact</li>
        </ul>
      </div>
      <Container fluid className="abouts">
        <Row>
          <Col className="about">
            <div>
              <h5 className="about51">
                <b>ABOUT</b>
              </h5>
              <h1>
                <b>WHO WE ARE</b>
              </h1>
            </div>
            <Row>
              <Col className="abouts51">
                <p className="about512 about513">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                  <br />
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="about514">
                  <ul>
                    <li className="about512 about515">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </li>
                    <li className="about512">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                    </li>
                    <li className="about512">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="abouts52">
            {/* <div className="about52"></div> */}
            <p className="about512">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure
              <br />
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla
              <br />
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa
              <br />
              qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="btn btn-Primary aboutbut">Learn More</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="callto">
        <Row>
          <Col>
            <div>
              <h1 className="call1">Call To Action</h1>
              <p className="callp1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur
                <br />
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <Button className="btn btn-Primary callbut">
                Call To Action
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="ser1">
        <Row>
          <h5 className="serh51">Services</h5>
          <h1 className="serh11">WHAT WE DO OFFER</h1>
          <Col>
            <div>
              <>
                <Row>
                  <Col className="ser2">
                    <div className="bi bi-briefcase">
                      <h2 className="serq serq1">
                        <b>Lorem Ipsum</b>
                      </h2>
                      <p className="serq">
                        Voluptatum deleniti atque corrupti
                        <br /> quos dolores et quas molestias
                        <br /> excepturi sint occaecati cupiditate non
                        <br /> provident
                      </p>
                    </div>
                  </Col>
                  <Col className="ser3">
                    <h2 className="serq serq1">
                      <b>Dolor Sitema</b>
                    </h2>
                    <p className="serq">
                      Minim veniam, quis nostrud
                      <br /> exercitation ullamco laboris nisi ut
                      <br /> aliquip ex ea commodo consequat
                      <br /> tarad limino ata
                    </p>
                  </Col>
                  <Col className="ser4">
                    <h2 className="serq serq1">
                      <b>Sed ut perspiciatis</b>
                    </h2>
                    <p className="serq">
                      Duis aute irure dolor in reprehenderit
                      <br /> in voluptate velit esse cillum dolore eu
                      <br /> fugiat nulla pariatur
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="ser5">
                    <h2 className="serq serq1">
                      <b>Magni Dolores</b>
                    </h2>
                    <p className="serq">
                      Excepteur sint occaecat cupidatat non
                      <br /> proident, sunt in culpa qui officia
                      <br /> deserunt mollit anim id est laborum
                    </p>
                  </Col>
                  <Col className="ser6">
                    <h2 className="serq serq1">
                      <b>Nemo Enim</b>
                    </h2>
                    <p className="serq">
                      At vero eos et accusamus et iusto odio
                      <br /> dignissimos ducimus qui blanditiis
                      <br /> praesentium voluptatum deleniti atque
                    </p>
                  </Col>
                  <Col className="ser7">
                    <h2 className="serq serq1">
                      <b>Eiusmod Tempor</b>
                    </h2>
                    <p className="serq">
                      Et harum quidem rerum facilis est et
                      <br /> expedita distinctio. Nam libero
                      <br /> tempore, cum soluta nobis est eligendi
                    </p>
                  </Col>
                </Row>
              </>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>

      <Container fluid className="testimonal">
        <Row>
          <Col className="tes1">
            <h5>TESTIMONAL</h5>
            <h1>WHAT THEY ARE SAYING ABOUT US</h1>
          </Col>
        </Row>
        <Row>
          <Col className="tes2">
            <p>
              Lorem ipsum dolor sit amet
              <br />
              consectetur adipisicing elit. Corrupti
              <br />
              voluptatum libero minus recusandae facilis?
              <br />
              Laboriosam expedita velit voluptatibus recusandae,
              <br />
              obcaecati accusamus quos dolorem vel
              <br />
              ex vero ipsum.
            </p>
          </Col>
          <Col className="tes3">
            <p>
              Lorem ipsum dolor sit amet
              <br />
              consectetur adipisicing elit. Corrupti
              <br />
              voluptatum libero minus recusandae facilis?
              <br />
              Laboriosam expedita velit voluptatibus recusandae,
              <br />
              obcaecati accusamus quos dolorem vel
              <br />
              ex vero ipsum.
            </p>
          </Col>
          <Col className="tes4">
            <p>
              Lorem ipsum dolor sit amet
              <br />
              consectetur adipisicing elit. Corrupti
              <br />
              voluptatum libero minus recusandae facilis?
              <br />
              Laboriosam expedita velit voluptatibus recusandae,
              <br />
              obcaecati accusamus quos dolorem vel
              <br />
              ex vero ipsum.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col>
            <h5>
              <b>PRICING</b>
            </h5>
            <h1>
              <b>OUR COMPETING PRICES</b>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h4>
                  <b>Free</b>
                </h4>
              </Col>
              <Row>
                <Col>
                  <p>Aida dere</p>
                  <p>Nec feugiat nisl</p>
                  <p>Nulla at volutpat dola</p>
                  <p>Pharetra massa</p>
                  <p>Massa ultricies mi</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="btn btn-Primary aboutbut">
                    Learn More
                  </Button>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <h4>
                  <b>Business</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p>Pharetra massa</p>
                <p>Massa ultricies mi</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn btn-Primary aboutbut">Learn More</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <h4>
                  <b>Developer</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p>Pharetra massa</p>
                <p>Massa ultricies mi</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn btn-Primary aboutbut">Learn More</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <h4>
              <b>Ultimate</b>
            </h4>
            <Row>
              <Col>
                <p>Aida dere</p>
                <p>Nec feugiat nisl</p>
                <p>Nulla at volutpat dola</p>
                <p>Pharetra massa</p>
                <p>Massa ultricies mi</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="btn btn-Primary aboutbut">Learn More</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="contact">
        <Row>
          <Col className="contact1">
            <h5 className="conh51">
              <b>CONTACT</b>
            </h5>
            <h1>
              <b>CONTACT US</b>
            </h1>
            <Row>
              <Col>
                <h2>Location:</h2>
                <p>A108 Adam Street, New York, NY 535022</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Email:</h2>
                <p>info@example.com</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Call:</h2>
                <p>+1 5589 55488 55s</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <input type="name" value="Your name" />
                </Col>
                <Col>
                  <input type="e-mail" value="Your email" />
                </Col>
                <Row>
                  <Col>
                    <input type="text" value="Submit" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input type="text" value="Message" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="btn btn-Primary conbut">
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Container>
          </Col>

          <Row>
            <Col></Col>
          </Row>
        </Row>
      </Container>

      <Container fluid className="footer">
        <Row>
          <Col>
            <div>
              <h1 className="footh11">Selecao</h1>
            </div>
            <div>
              <p className="footp1">
                Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
                eligendi fuga maxime saepe commodi placeat.
              </p>
            </div>
            <div className="footp2">
              <p>
                © Copyright Selecao. All Rights Reserved
                <br />
                <div className="footp3">
                  Designed by <a href="#">Mr.Pink_The_Pink_Lover</a>
                </div>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Selecao;
