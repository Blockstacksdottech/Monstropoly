import React from "react";
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton, Form, Image } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import BuyButtonLogo from "../public/assets/image/mpoly.svg";
import { FaTimes } from "react-icons/fa";

const LayoutHeader = (props:any) => {
  return (
    <div>
      <Row className="d-flex justify-content-between align-items-center mb-3">
        <Col
          xs={12}
          md={12}
          lg={6}
          className="d-flex justify-content-start align-items-center text-center text-sm-center text-md-center text-lg-start pt-3 pt-md-3 pt-lg-0"
        >
          <h4 className="color-white fw-medium mb-0 text-uppercase">
            {props.PageTitle}
          </h4>
          <div className={props.filtdisableClass}>
            <Button variant="primary" className="filtererres-btn px-2 ms-3">
              Epic <FaTimes className="ms-2" />
            </Button>
          </div>
        </Col>
        <Col
          md={6}
          lg={6}
          className="text-end d-none d-sm-none d-md-none d-lg-block"
        >
          <Button className="BuyButton" disabled>
            <Image src={BuyButtonLogo.src} className="img-fluid" />
            <span>Buy MPOLY</span>
            <BsBoxArrowUpRight />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default LayoutHeader;
