import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Pagination, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import {
  postApplicationForm,
  getPropertyById,
} from "../../service/RestApiService";
import { getErrorMessage } from "../../service/CommonUtils";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmpty } from "../../service/CommonUtils";

const Applicants = () => {
  const { id } = useParams();

  const [loading, setLoader] = useState(false);
  const [err, setError] = useState("");
  const [propertyDetails, setPropertyDetails] = useState({});
  const [data, setData] = useState({
    propertyId: id,
    firstname: "",
    lastname: "",
    dob: "",
    ssn: "",
    idNumber: "",
    phone: "",
    occupation: "",
  });

  const getProperty = async () => {
    try {
      const propertyDetails = await getPropertyById(id);
      setPropertyDetails(propertyDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  const errorMessage = (message) =>
    toast.error(<p className="text-white tx-16 mb-0">{message}</p>, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2000,
      theme: "colored",
    });

  const addApplicationMutation = useMutation({
    mutationFn: postApplicationForm,
    onSuccess: (data) => {
      setLoader(false);
      successMesage();
    },
    onError: (error) => {
      setLoader(false);
      errorMessage(getErrorMessage(error));
    },
  });

  const successMesage = () =>
    toast.success(
      <span className="text-white tx-16 mb-0">
        Application Form Submited Success
      </span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 5000,
        theme: "colored",
      }
    );

  const { firstname, lastname, dob, ssn, idNumber, phone, occupation } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    if(firstname==="" || lastname==="" || dob==="" || idNumber==="" || phone==="" || occupation===""){
     errorMessage("Please fill in all the required field")
    }else{
        addApplicationMutation.mutate(data);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <ToastContainer />
        <Row style={{ marginBottom: 20 }}>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
          <Col lg={10} md={10} sm={10} xl={10}>
            <PageHeader
              titles="Application Form"
              active="Applications"
              items={["Home"]}
            />

            <Row className="row-cards">
              <Col xl={12} lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title as="h3">
                      <h1
                        className="title fw-bold fs-20 "
                        style={{ color: "#21356A" }}
                      >
                        {" "}
                        Section A -Property Details
                      </h1>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={6} xl={6} sm={6}>
                        <div className="product-image6 p-5">
                          <Link to={`${process.env.PUBLIC_URL}/user/dashboard`}>
                            <img
                              className="img-fluid br-7 w-50"
                              src={require("../../assets/r3.png")}
                              alt="img"
                            />
                          </Link>
                        </div>
                      </Col>
                      <Col md={6} xl={6} sm={6}>
                        <Row>
                          <Col md={12} xl={12} sm={12}>
                            <h1
                              className="title fw-bold fs-20 "
                              style={{ color: "#21356A" }}
                            >
                              {propertyDetails && (
                                <>{propertyDetails["title"] } / {propertyDetails["currency"] } {propertyDetails["price"] } </>
                              )}
                            </h1>
                          </Col>

                          <Col md={12} xl={12} sm={12}>
                            {propertyDetails && (
                              <>{propertyDetails["description"]}</>
                            )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Card.Title as="h3">
                      <h1
                        className="title fw-bold fs-20 "
                        style={{ color: "#21356A" }}
                      >
                        {" "}
                        Section B -Applicant Details
                      </h1>
                    </Card.Title>

                    <form>
                      <Row>
                        <Col sm={6} md={6}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              First Name <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First name"
                              onChange={changeHandler}
                              name="firstname"
                              value={firstname}
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col sm={6} md={6}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              Last Name <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Last name"
                              onChange={changeHandler}
                              value={lastname}
                              name="lastname"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              DOB <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="dob"
                              onChange={changeHandler}
                              value={dob}
                              name="dob"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              SSN <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="SSN"
                              onChange={changeHandler}
                              value={ssn}
                              name="ssn"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              Id Number No. <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="id number"
                              onChange={changeHandler}
                              value={idNumber}
                              name="idNumber"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              Phone <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="phone"
                              onChange={changeHandler}
                              value={phone}
                              name="phone"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-2">
                            <Form.Label>
                              Occupation <span className="text-red">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="occupation"
                              onChange={changeHandler}
                              value={occupation}
                              name="occupation"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </form>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Link
                      onClick={handleSubmit}
                      to={`${process.env.PUBLIC_URL}/user/applicationn/form/${id}`}
                      className="btn me-2 btn-block"
                      style={{ background: "#21356A", color: "#fff" }}
                    >
                      <i className="fe fe-home mx-2"></i>
                      submit{" "}
                      {loading ? (
                        <span
                          role="status"
                          aria-hidden="true"
                          className="spinner-border spinner-border-sm ms-2"
                        ></span>
                      ) : (
                        ""
                      )}
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Applicants;
