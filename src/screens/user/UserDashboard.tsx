import React, { FC } from "react";
import {
  Card,
  Pagination,
  Row,
  Col,
  Form,
  ListGroup,
  InputGroup,
  FormControl,
  Nav,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import { getAllProperties } from "../../service/RestApiService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Mark = [{ value: 80 }, { value: 950 }];

const Home = () => {
  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["getProperties"],
    queryFn: () => getAllProperties(),
    staleTime: 1000 * 5,
  });

  const [value, setValue] = React.useState<number[]>();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div>
      <div className="container-fluid">
        <Row style={{ marginBottom: 20 }}>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
          <Col lg={10} md={10} sm={10} xl={10}>
            <PageHeader
              titles="SmatProp"
              active="Property Listings"
              items={["Home"]}
            />
            <Row className="row-cards">
              <Col xl={3} lg={4}>
                <Row>
                  <Col md={12} lg={12}>
                    <Card>
                      <Card.Header>
                        <Card.Title className="title fw-bold fs-20 "> Property Categories</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <ListGroup>
                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i> Commercial{" "}
                            </Link>
                            <span className="product-label">22</span>{" "}
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i> Industrial{" "}
                            </Link>
                            <span className="product-label">15</span>{" "}
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i>Holiday
                              Homes{" "}
                            </Link>
                            <span className="product-label">10</span>{" "}
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i>{" "}
                              Residential Property{" "}
                            </Link>
                            <span className="product-label">88</span>{" "}
                          </ListGroup.Item>

                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i> Storage
                              Units{" "}
                            </Link>
                            <span className="product-label">45</span>{" "}
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0 p-0">
                            {" "}
                            <Link to="#">
                              <i className="fe fe-chevron-right"></i> Students
                              Accommodation{" "}
                            </Link>
                            <span className="product-label">88</span>{" "}
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Card.Title className="title fw-bold fs-20 ">Property Price Range</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox0"
                          label="Upto $500"
                        />
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox1"
                          label="$500 - $1000"
                        />
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox2"
                          label="$1000 - $1500"
                        />
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox3"
                          label="Over $2000"
                        />
                        <div className="d-flex">
                          <Card.Body className="px-0">
                            <Slider
                              onChange={handleChange}
                              value={value}
                              defaultValue={[100, 370]}
                              min={20}
                              max={670}
                              marks={Mark}
                            />
                          </Card.Body>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xl={9} lg={8}>
                <Row>
                  <Col xl={12}>
                    <Card className="p-0 bg-transparent shadow-none">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="first"
                      >
                        <Card.Body className="p-4 bg-white br-7">
                          <Row>
                            <Col xl={9} lg={8} md={8} sm={8}>
                              <InputGroup className="d-flex w-100 float-start">
                                <FormControl
                                  type="text"
                                  className="border-end-0 my-2"
                                  placeholder="Search by location"
                                />
                                <InputGroup.Text className="bg-transparent border-start-0 text-muted my-2">
                                  <i
                                    className="fe fe-search text-muted"
                                    aria-hidden="true"
                                  ></i>
                                </InputGroup.Text>
                              </InputGroup>
                            </Col>
                            <Col xl={3} lg={12} md={4} sm={4}>
                              <Nav
                                variant="pills"
                                className="item2-gl-menu float-end my-2"
                              >
                                <Nav.Item className="border-end">
                                  <Nav.Link eventKey="first">
                                    <i className="fa fa-th"></i>
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Col>
                          </Row>
                        </Card.Body>
                        <Tab.Content className="erf pt-5">
                          <Tab.Pane eventKey="first">
                            <div className="tab-pane active" id="tab-11">
                              <Row>
                                {data &&
                                  data?.map((item: any) => (
                                    <>
                                      <Col md={6} xl={12} sm={6}>
                                        <Card>
                                          <div className="product-grid6">
                                            <div className="product-image6 p-5">
                                              <Link
                                                to={`${process.env.PUBLIC_URL}/user/dashboard`}
                                              >
                                                <img
                                                  className="img-fluid br-7 w-50"
                                                  src={require("../../assets/r3.png")}
                                                  alt="img"
                                                />
                                              </Link>
                                            </div>
                                            <Card.Body className="pt-0">
                                              <div className="product-content text-center">
                                                <h1 className="title fw-bold fs-20 "  style={{color: "#21356A"}}>
                                                  <Link
                                                    to={`${process.env.PUBLIC_URL}/user/dashboard`}
                                                  >
                                                    {item.title}
                                                  </Link>
                                                </h1>
                                                <h5 className="fw-bold fs-20 mb-3"  style={{color: "#21356A"}}>
                                                        {item.address}
                                                      </h5>
                                                <p  style={{color: "#21356A"}}>{item.reference}</p>
                                                <p className="fs-16">
                                                  {item.description}
                                                </p>

                                                <div className="price">
                                                  {item.currency} {item.price} /month
                                                </div>
                                              </div>
                                            </Card.Body>
                                            <Card.Footer className="text-center">
                                              <Link
                                                to={`${process.env.PUBLIC_URL}/user/applicationn/form/${item.id}`}
                                                className="btn me-2 btn-block"
                                                style={{ background: "#21356A", color: "#fff" }}
                                              >
                                                <i className="fe fe-home mx-2"></i>
                                                Apply Property
                                              </Link>
                                            </Card.Footer>
                                          </div>
                                        </Card>
                                      </Col>
                                    </>
                                  ))}

                                <div className="mb-5">
                                  <div className="float-end">
                                    <Pagination>
                                      <Pagination.Item disabled>
                                        Prev
                                      </Pagination.Item>
                                      <Pagination.Item active>
                                        {1}
                                      </Pagination.Item>
                                      <Pagination.Item>{2}</Pagination.Item>
                                      <Pagination.Item>{3}</Pagination.Item>
                                      <Pagination.Item>{4}</Pagination.Item>
                                      <Pagination.Item>{5}</Pagination.Item>
                                      <Pagination.Item>Next</Pagination.Item>
                                    </Pagination>
                                  </div>
                                </div>
                              </Row>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="tab-pane" id="tab-12"></div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
