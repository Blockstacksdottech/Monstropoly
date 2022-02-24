import { Row, Col, Card, Button, Form , Image } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import stackCharacter from "../public/assets/image/stackCharacter.png";
import MGOLD2 from "../public/assets/image/MGOLD2.png";
import LayoutHeader from "../Component/LayoutHeader";
import Page from "../Layout/Page";

export default function StakeFarm() {
  return (
    <Page>
      <LayoutHeader PageTitle="Stake / FARM" filtdisableClass="d-none" />
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={5} className="px-3 px-sm-3 px-md-3 px-lg-4">
          <Row className="training-mostercards">
            <Col md={12} className="">
              <div className="mostercards stakecard">
                <Card className="m-0 border-0 py-3 px-0 px-sm-2 px-md-4 px-lg-5">
                  <Card.Body className="d-flex justify-content-center align-items-center border-0 px-0 px-sm-2 px-md-3 px-lg-3">
                    <div className="text-center">
                      <Card.Title className="color-white fs-30 fw-extrabold text-uppercase mb-4">
                        Stake mpoly
                      </Card.Title>
                      <Form>
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="Amount" />
                        </Form.Group>
                      </Form>
                      <Button variant="primary" className="start-training">
                        Stake
                      </Button>
                      <Card.Text className="color-white fs-15 fw-medium mt-4">
                        You will receive 0,00 MPOLY each 15 days.
                      </Card.Text>
                      <Card.Text className="color-white fs-24 fw-bold">
                        You have 0{" "}
                        <Image src={MGOLD2.src} alt="" className="img-fluid" />
                      </Card.Text>
                      <Card.Text className="apytitlesec">apy : 0000%</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={5} className="px-3 px-sm-3 px-md-3 px-lg-4">
          <Row className="">
            <Col md={12} className="py-3 px-0 px-sm-0 px-md-3 px-lg-3">
              <div className="yourstackecard">
                <h2 className="color-white fs-25 fw-extrabold text-uppercase mt-4 mt-sm-4 mt-md-0 mb-4">
                  Your stakes
                </h2>
                <Card className="m-0 border-0 p-0 bg-litepink">
                  <Card.Body className="farmcardbody border-0 bg-valhalla rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <Button className="btn crossbtn">
                        <BsX />
                      </Button>
                      <Card.Title className="color-white fs-23 fw-regular text-capitalise mb-2">
                        Staking
                      </Card.Title>
                      <Card.Text className="color-white fs-24 fw-bold mb-2">
                        <Image src={MGOLD2.src} alt="" className="img-fluid" />
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="color-white fs-24 fw-bold mb-0">
                        1000
                        <Image src={MGOLD2.src} alt="" className="img-fluid ms-2" />
                      </Card.Text>
                      <Card.Text className="color-white fs-12 fw-medium mb-0">
                        4 days to go!
                      </Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Body className="text-center">
                    <Card.Title className="color-haiti fs-31 fw-regular mb-0">
                      30{" "}
                      <Image src={MGOLD2.src} alt="" className="img-fluid mx-2" />
                      to collect
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <hr />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm={12} md={5} className="px-3 px-sm-3 px-md-3 px-lg-4">
          <Row className="training-mostercards">
            <Col md={12} className="">
              <div className="mostercards stakecard">
                <Card className="m-0 border-0 py-3 px-0 px-sm-2 px-md-4 px-lg-5">
                  <Card.Body className="d-flex justify-content-center align-items-center border-0 px-0 px-sm-2 px-md-3 px-lg-3">
                    <div className="text-center">
                      <Card.Title className="color-white fs-30 fw-extrabold text-uppercase mb-4">
                        farm mpoly
                      </Card.Title>
                      <Card.Text className="color-white fs-12 fw-medium mt-4">
                        Add liquidity to the MPOLY-BNB pair on Pancakeswap.
                      </Card.Text>
                      <Card.Text className="bg-litepink color-haiti d-inline-block py-2 px-3 rounded fs-12 fw-semibold mb-0">
                        Go to Pancakeswap <BsBoxArrowUpRight className="ms-1" />
                      </Card.Text>
                      <Card.Text className="color-white fs-15 fw-medium my-3">
                        You will receive 0,00 MPOLY each 15 days.
                      </Card.Text>
                      <Button variant="primary" className="start-training">
                        Stake
                      </Button>
                      <Card.Text className="color-white fs-24 fw-bold mt-3">
                        You have 0{" "}
                        <Image src={MGOLD2.src} alt="" className="img-fluid" />
                      </Card.Text>
                      <Card.Text className="apytitlesec">apy : 0000%</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={5} className="px-3 px-sm-3 px-md-3 px-lg-4">
          <Row className="">
            <Col md={12} className="py-3 px-0 px-sm-0 px-md-3 px-lg-3">
              <div className="yourstackecard">
                <h2 className="color-white fs-25 fw-extrabold text-uppercase mb-4">
                  Your FARM
                </h2>
                <Card className="m-0 border-0 p-0 bg-litepink">
                  <Card.Body className="farmcardbody border-0 bg-valhalla rounded">
                    <div className="d-flex justify-content-between align-items-center">
                      <Button className="btn crossbtn">
                        <BsX />
                      </Button>
                      <Card.Title className="color-white fs-23 fw-regular text-capitalise mb-2">
                        Farming
                      </Card.Title>
                      <Card.Text className="color-white fs-24 fw-bold mb-2">
                        <Image src={MGOLD2.src} alt="" className="img-fluid" />
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="color-white fs-24 fw-bold mb-0">
                        1000
                        <Image src={MGOLD2.src} alt="" className="img-fluid ms-2" />
                      </Card.Text>
                      <Card.Text className="color-white fs-12 fw-medium mb-0">
                        4 days to go!
                      </Card.Text>
                    </div>
                  </Card.Body>
                  <Card.Body className="text-center">
                    <Card.Title className="color-haiti fs-31 fw-regular mb-0">
                      30{" "}
                      <Image src={MGOLD2.src} alt="" className="img-fluid mx-2" />
                      to collect
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-end">
        <Image src={stackCharacter.src} className="img-fluid stackcrimg" />
      </div>
    </Page>
  );
}

