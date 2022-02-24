import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import MonsterCard from "./MonsterCard";

const TrainiSmallCard = () => {
  return (
    <>
      <Row className="training-mostercards m-1 py-1 px-2">
        <Col md={6} className="p-2">
          <MonsterCard Title="MONSTER" />
        </Col>
        <Col md={6} className="p-2">
          <MonsterCard Title="WEAPON" />
        </Col>
      </Row>
      <Row className="training-mostercards d-flex justify-content-between align-items-center m-1 mt-2 p-3">
        <Col
          xs={12}
          sm={12}
          md={6}
          className="p-0 text-center text-sm-center text-md-start"
        >
          <p className="color-white fs-12 fw-extrabold mb-1">REWARD: 0 MPOLY</p>
          <p className="color-white fs-12 fw-extrabold mb-0">
            DURATION: 0 DAYS
          </p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          className="p-0 text-center mt-3 mt-sm-3 mt-md-0"
        >
          <Button variant="primary" className="start-training px-3">
            START TRAINING
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default TrainiSmallCard;
