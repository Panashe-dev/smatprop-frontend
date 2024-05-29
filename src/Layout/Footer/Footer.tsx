import { FC, Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <Fragment>
    <footer className="footer mt-4">
      <div className="container">
        <Row className="align-items-center flex-row-reverse">
          <Col md={12} sm={12} className="text-center">
            Copyright © 2024 <Link to="#">Smatech</Link>. All rights reserved.
          </Col>
        </Row>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
