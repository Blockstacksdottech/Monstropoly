import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import cardbg from "../public/assets/image/cardbg.gif";

const SIngleCard = () => {
  return (
    // <Col xs={12} sm={12} md={3} className="text-center mb-5">
    <div className="p-1 p-sm-1 p-md-3 mb-3">
      <Card className="text-center bg-transparent p-0">
        <Card.Img src={cardbg.src} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>
      <div className="d-flex justify-content-between">
        <Button className="sell-btn">Sell</Button>{" "}
        <Button className="sell-btn">Transfer</Button>{" "}
      </div>
    </div>
  );
}

export default SIngleCard;
