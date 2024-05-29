import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Pagination, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import { postApplicationForm } from "../../service/RestApiService";
import { getErrorMessage } from "../../service/CommonUtils";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "react-data-table-component-extensions/dist/index.css";

function applications() {

  const columns: any = [
    {
      name: "Property Id",
      selector: (row) => [row.id],
      sortable: false,
      cell: (row) => <span className="align-middle"> {row.id} </span>,
    },
    {
      name: "Firstname",
      selector: (row) => [row.firstname],
      sortable: false,
      cell: (row) => <span className="align-middle"> {row.firstname} </span>,
    },
    {
      name: "Lastname",
      selector: (row) => [row.lastname],
      sortable: true,
      cell: (row) => (
        <div className="align-middle">
          <span>{row.lastname}</span>
        </div>
      ),
    },
    {
      name: "Email",
      selector: (row) => [row.email],
      sortable: true,
      cell: (row) => <span className="align-middle">{row.email}</span>,
    },
    {
      name: "Phone",
      selector: (row) => [row.phone],
      sortable: true,
      cell: (row) => <span className=" align-middle">{row.phone}</span>,
    },
    {
      name: "National Id",
      sortable: false,
      cell: (row) => (
        <span className="text-center align-middle">{row.nationalId}</span>
      ),
    },
    {
      name: "SSN",
      sortable: false,
      cell: (row) => (
        <span className="text-center align-middle">{row.product}</span>
      ),
    },
    {
      name: "occupation",
      sortable: true,
      cell: (row) => (
        <span className="text-center align-middle">{row.status}</span>
      ),
    },
  ];

  return (
    <div>
      <div className="container-fluid">
        <ToastContainer />
        <Row style={{ marginBottom: 20 }}>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
          <Col lg={10} md={10} sm={10} xl={10}>
            <PageHeader
              titles="Application List"
              active="Applications"
              items={["Home"]}
            />

            <Row className="row-cards">
              <Col xl={12} lg={12}>
                <Card>
                  <Card.Header></Card.Header>
                  <Card.Body>
                    <div className="product table-responsive">
                      <DataTable
                        className="border-bottom"
                        // columns={columns}
                        responsive
                        striped
                        // data={data}
                        noHeader
                        // defaultSortField="name"
                        sortIcon={<ArrowDownwardIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
        </Row>
      </div>
    </div>
  );
}

export default applications;
