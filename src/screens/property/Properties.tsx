import React from "react";
import {
  Card,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import { getAllProperties } from "../../service/RestApiService";
import { useQuery, useMutation } from "@tanstack/react-query";
import { isEmpty } from "../../service/CommonUtils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Properties = () => {
  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["getProperties"],
    queryFn: () => getAllProperties(),
    staleTime: 1000 * 5,
  });



  const getMessage = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Please log in to apply</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored',
      }
    );

  return (
    <div>
      <div className="container-fluid">
        <Row style={{ marginBottom: 20 }}>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
          <Col lg={10} md={10} sm={10} xl={10}>
            <PageHeader
              titles="Property Listings"
              active="Properties"
              items={["Home"]}
            />
               
            <Row className="row-cards">
          
              <Col xl={12} lg={12}>
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
                                      <Col xl={12} lg={12} md={12}>
                                        <Card className="overflow-hidden">
                                          <Card.Body>
                                            <Row className="g-0">
                                              <Col xl={3} lg={12} md={12}>
                                                <div className="product-list">
                                                  <div className="product-image"></div>
                                                  <div className="br-be-0 br-te-0">
                                                    <Link
                                                      to={`${process.env.PUBLIC_URL}/properties/`}
                                                      className=""
                                                    >
                                                      <img src={require("../../assets/r3.png")} alt="img" className="cover-image br-7 w-100" />
                                                    </Link>
                                                  </div>
                                                </div>
                                              </Col>
                                              <Col
                                                xl={6}
                                                lg={12}
                                                md={12}
                                                className="border-end my-auto"
                                              >
                                                <Card.Body>
                                                  <div className="mb-3">
                                                    <Link
                                                      to={`${process.env.PUBLIC_URL}/properties/`}
                                                      className=""
                                                    >
                                                      <h3 className="fw-bold fs-30 mb-3" style={{color: "#21356A"}}>
                                                        {item.title}
                                                      </h3>

                                                      <h5 className="fw-bold fs-30 mb-3"  style={{color: "#21356A"}}>
                                                        {item.address}
                                                      </h5>
                                                      <p  style={{color: "#21356A"}}>{item.reference}</p>
                                                    </Link>
                                                    <p className="fs-16">
                                                      {item.description}
                                                    </p>
                                                  </div>
                                                </Card.Body>
                                              </Col>
                                              <Col
                                                xl={3}
                                                lg={12}
                                                md={12}
                                                className="my-auto"
                                              >
                                                <Card.Body className="p-0">
                                                  <div className="price h3 text-center mb-5 fw-bold">
                                                  {item.currency} {item.price} /month
                                                  </div>
                                                  <Link
                                                  onClick={getMessage}
                                                    to={`${process.env.PUBLIC_URL}/properties/`}
                                                    className="btn me-2  btn-block"
                                                    style={{ background: "#21356A", color: "#fff" }}
                                                  >
                                                    <i className="fe fe-home mx-2"></i>
                                                    Apply Property
                                                  </Link>
                                                </Card.Body>
                                              </Col>
                                            </Row>
                                          </Card.Body>
                                        </Card>
                                      </Col>
                                    </>
                                  ))}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Properties;
