import React, { Fragment, useEffect, useState, lazy, Component } from "react";
import PageHeader from "../../Layout/PageHeader/PageHeader";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend,
} from "chart.js";
import ReactApexChart from "react-apexcharts";
import { Card, Col, Row,Button } from "react-bootstrap";

const Footer = lazy(() => import("../../Layout/Footer/Footer"));

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Legend
);

export class RecentOrder extends Component<{}, { options: any; series: any }> {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          type: "column",
          data: [27, 50, 28, 50, 28, 30, 22],
          color: "#05C3FB",
        },
        {
          type: "column",
          data: [32, 58, 68, 65, 40, 68, 58],
          color: "#EC82EF",
        },
      ],

      options: {
        chart: {
          type: "line",
          sparkline: {
            enabled: true,
          },
          stacked: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: "40",
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 2, 2],
        },

        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        grid: {
          show: false,
          position: "front",

          padding: {
            top: 0,
            right: 4,
            bottom: 0,
            left: 4,
          },
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={210}
        />
      </div>
    );
  }
}
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
    labels: {
      usePointStyle: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
        drawBorder: false,
        color: "rgba(119, 119, 142, 0.08)",
      },
      ticks: {
        fontColor: "#b0bac9",
        autoSkip: true,
      },
      scaleLabel: {
        display: false,
        labelString: "Month",
        fontColor: "transparent",
      },
    },
    y: {
      ticks: {
        min: 0,
        max: 1050,
        stepSize: 150,
        fontColor: "#b0bac9",
      },
      display: true,
      grid: {
        display: true,
        drawBorder: false,
        zeroLineColor: "rgba(142, 156, 173,0.1)",
        color: "rgba(142, 156, 173,0.1)",
      },
      scaleLabel: {
        display: false,
        labelString: "sales",
        fontColor: "transparent",
      },
    },
  },
  title: {
    display: false,
    text: "Normal Legend",
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Property Sales",
      data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454],
      borderColor: "#21356A",
      backgroundColor: "#21356A",
      tension: 0.3,
      borderWidth: 3,
      pointRadius: 0,
    }
  ],
};

export function SalesAnalytics() {
  return (
    <Line className="chart-dropshadow h-330" options={options} data={data} />
  );
}

export default function AdminDashboard() {
  return (
    <Fragment>
      <div className="container-fluid">
        {/* <!-- ROW-1 --> */}

        <Row style={{ marginBottom: 20 }}>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
          <Col lg={10} md={10} sm={10} xl={10}>
            <PageHeader
              titles="Dashboard"
              active="Dashboard"
              items={["Home"]}
            />
            <Row>
              <Col lg={6} md={6} sm={12} xl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mt-2">
                        <h6 className="">Total Applicants</h6>
                        <h2 className="mb-0 number-font">44</h2>
                      </div>
                      <div className="ms-auto">
                        <div className="chart-wrapper mt-1"></div>
                      </div>
                    </div>
                    <span className="text-muted fs-12">
                      <span className="text-secondary me-2">
                        <i className="fe fe-arrow-up-circle  text-secondary"></i>{" "}
                        0%
                      </span>
                      ---
                    </span>
                  </Card.Body>
                </Card>

              </Col>
              <Col lg={6} md={6} sm={12} xl={3}>
                <div className="card overflow-hidden">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mt-2">
                        <h6 className="">Total Properties</h6>
                        <h2 className="mb-0 number-font">67</h2>
                      </div>
                      <div className="ms-auto">
                        <div className="chart-wrapper mt-1"></div>
                      </div>
                    </div>
                    <span className="text-muted fs-12">
                      <span className="text-pink me-2">
                        <i className="fe fe-arrow-down-circle text-pink"></i>{" "}
                        0.0%
                      </span>
                     ---
                    </span>
                  </Card.Body>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xl={3}>
                <div className="card overflow-hidden">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mt-2">
                        <h6 className="">Total Users</h6>
                        <h2 className="mb-0 number-font">56</h2>
                      </div>
                      <div className="ms-auto">
                        <div className="chart-wrapper mt-1"></div>
                      </div>
                    </div>
                    <span className="text-muted fs-12">
                      <span className="text-green me-2">
                        <i className="fe fe-arrow-up-circle text-green"></i>{" "}
                        0.0%
                      </span>
                      ---
                    </span>
                  </Card.Body>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xl={3}>
                <Card className="overflow-hidden">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mt-2">
                        <h6 className="">Total Registrstion</h6>
                        <h2 className="mb-0 number-font">10</h2>
                      </div>
                      <div className="ms-auto">
                        <div className="chart-wrapper mt-1"></div>
                      </div>
                    </div>
                    <span className="text-muted fs-12">
                      <span className="text-warning me-2">
                        <i className="fe fe-arrow-up-circle text-warning"></i>{" "}
                        0.6%
                      </span>
                      System Users
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12} xl={12}>
                <Card>
                  <Card.Header>
                    <Card.Title as="h3">Property Sales Analytics</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="chartjs-wrapper-demo myChartSaah">
                      <SalesAnalytics />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={1} md={1} sm={1} xl={1}></Col>
        </Row>
      </div>
      <Footer />
    </Fragment>
  );
}
