import { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Fragment>
    <Card
      style={{
        marginBottom: -3,
        height: 300,
        background: "#21356A",
        marginTop: 200,
      }}
    >
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Col md={12}>
            <div>
              <Row className="align-items-center flex-row-reverse">
                <div className="top-footer" style={{ marginTop: 40 }}>
                  <Row>
                    <Col lg={3} sm={3} md={3}>
                      <img
                        className="img-fluid br-7 w-50"
                        src={require("../../assets/smatprop.PNG")}
                        alt="img"
                      />
                    </Col>

                    <Col lg={3} sm={3} md={3}>
                      <h6 className="text-white">Application For</h6>
                      <ul className="list-unstyled mb-4">
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Commercial
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Residential
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Storage units
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Students
                          </Link>
                        </li>
                      </ul>
                    </Col>

                    <Col lg={3} sm={3} md={3}>
                      <h6 className="text-white">Social Media</h6>
                      <ul className="list-unstyled mb-4">
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Facebook
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Twitter
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Instagram
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            LinkedIn
                          </Link>
                        </li>
                      </ul>
                    </Col>

                    <Col lg={3} sm={3} md={3}>
                      <h6 className="text-white">Location</h6>
                      <ul className="list-unstyled  mb-4">
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            25 West Street, Houghton Estate
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            South Africa
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            20 Ascot Road, Avondale West
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="text-white">
                            <i
                              className="fa fa-angle-right mr-3 text-warning fw-bold"
                              style={{ fontSize: 20, marginRight: 15 }}
                            ></i>{" "}
                            Zimbabwe
                          </Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Row>
            </div>
          </Col>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Card>
  </Fragment>
);

export default Footer;
