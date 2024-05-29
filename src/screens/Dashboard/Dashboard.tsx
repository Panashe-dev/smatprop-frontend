import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Typewriter from "typewriter-effect/dist/core";

export default function Dashboard() {
  useEffect(() => {
    var app = document.getElementById("typewriter");
    new Typewriter(app, {
      strings: [
        ", Individual Membership Registration.",
        ", Corporate Membership Registration.",
      ],
      autoStart: true,
      loop: false,
    });
  }, []);

  return (
    <Fragment >
      <Carousel>
        <Carousel.Item>
          <img
            className="w-100 br-5 br-5 active"
            src={require("../../assets/smart.PNG")}
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}
