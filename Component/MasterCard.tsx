import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaDumbbell, FaHeart, FaShieldAlt } from "react-icons/fa";
import { GrTarget } from "react-icons/gr";
import masterline from "../public/assets/image/masterline.png";

const MasterCard = (props:any) => {
  const MasterBg = props.MasterBg
  return (
    <>
      <div className="master-card mb-3">
        <Card
          className="text-center bg-transparent p-0"
          style={{ backgroundImage: "url(" + MasterBg + ")" }}
        >
          <Card.Body className="">
            <p className="m-0 color-white countags">99</p>
            <p className="m-0 color-white dumblecountags">
              <FaDumbbell /> 99
            </p>
            <p className="mb-0 symbols color-white">#999999</p>
            <Image
              src={props.Character}
              alt="Card image"
              className="m-auto img-fluid Character-img"
            />
            <div className="px-2">
              <Image src={masterline.src} className="img-fluid w-100 m-auto" />
              <Card.Title className="monstaer-title color-white my-1">
                {props.MonsterName}
              </Card.Title>
              <Image src={masterline.src} className="img-fluid w-100 m-auto" />
            </div>
            <Row className=" d-flex justify-content-center align-items-center g-0 mb-2 mb-sm-2 mb-md-3 mt-1 mt-sm-1 mt-md-2">
              <Col xs={6}>
                <p className="mb-1 symbols text-end me-2 me-sm-2 me-md-3 me-lg-3 ">
                  <FaHeart /> 99
                </p>
              </Col>
              <Col xs={6}>
                <p className="mb-1 symbols text-start ms-2 ms-sm-2 ms-md-3 ms-lg-3 ">
                  <FaShieldAlt /> 99
                </p>
              </Col>
              <Col xs={6}>
                <p className="mb-0 symbols text-end me-2 me-sm-2 me-md-3 me-lg-3 ">
                  <FaShieldAlt /> 99
                </p>
              </Col>
              <Col xs={6}>
                <p className="mb-0 symbols text-start ms-2 ms-sm-2 ms-md-3 ms-lg-3 ">
                  <FaHeart /> 99
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-between">
          <Button className="sell-btn">Sell</Button>{" "}
          <Button className="sell-btn">Transfer</Button>{" "}
        </div>
      </div>
    </>
  );
}

export default MasterCard;
