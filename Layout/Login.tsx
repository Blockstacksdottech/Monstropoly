import React from "react";
import Link from "next/link";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import WellcomeGif from "../public/assets/gif/wellcome.gif";
import MetaMask_Fox from "../public/assets/image/MetaMask_Fox.svg";

const Login = () => {
  return (
    <div className="loginpage">
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col xs={12}>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={10} sm={5} md={3} lg={2}>
                <Image src={WellcomeGif.src} className="img-fluid" />
              </Col>
            </Row>
            <h1 className="color-white fw-bold fs-20 my-3">
              PLEASE, USE <Image src={MetaMask_Fox.src} className="img-fluid" />
              METAMASK <br /> FOR BROWSER
            </h1>
            <Button className="Logpage-btn mb-3">METAMASK</Button>
            <br />
            <Link href="/mynfts"> 
              <p className="Logpage-btn btn">WALLET CONNECT</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
