import { useState } from 'react';
import { Row, Col, Button, DropdownButton, Form, Modal } from "react-bootstrap";
import Slider from "react-slick";
import MasterCard from "../Component/MasterCard";
import charactermodel from "../public/assets/image/character-model.png";
import Common from "../public/assets/gif/Common.gif";
import Epic from "../public/assets/gif/Epic.gif";
import Legendary from "../public/assets/gif/Legendary.gif";
import low_rare from "../public/assets/gif/Mythic.gif";
import Mythic from "../public/assets/gif/low-rare.gif";
import Rare from "../public/assets/gif/Rare.gif";
import LayoutHeader from "../Component/LayoutHeader";
import Page from "../Layout/Page";

export default function MyNFTS() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          swipeToSlide: true,
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          swipeToSlide: true,
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <Page>
      <Row className="d-block d-sm-block d-md-block d-lg-none">
        <Col className="text-center">
          <Button
            variant="primary"
            className="filterbtn"
            onClick={() => setModalShow(true)}
          >
            Filters
          </Button>
        </Col>
      </Row>
      <LayoutHeader PageTitle="99 NFTs" />
      <Row className="d-flex justify-content-between align-items-center mb-3 d-none d-sm-none d-md-none d-lg-block">
        <Col md={12}>
          <Row>
            <Col md={3} className="filtsecinpsec">
              <Form>
                <Form.Group
                  className="mb-0"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Name" />
                </Form.Group>
              </Form>
            </Col>
            <Col md={2} className="filter-secion">
              <DropdownButton
                id="dropdown-button-dark-example2"
                title="Rarity"
                className="filterdropbtn"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                  </Col>
                </Row>
              </DropdownButton>
            </Col>
            <Col md={2} className="filter-secion">
              <DropdownButton
                id="dropdown-button-dark-example2"
                title="Type"
                className="filterdropbtn"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="SELLING" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="SELLING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                  </Col>
                </Row>
              </DropdownButton>
            </Col>
            <Col md={2} className="filter-secion">
              <DropdownButton
                id="dropdown-button-dark-example2"
                title="State"
                className="filterdropbtn"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="SELLING" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="SELLING" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="TRAINING" />
                    </Form.Group>
                  </Col>
                </Row>
              </DropdownButton>
            </Col>
            <Col md={2} className="filter-secion">
              <Button
                variant="link"
                className="px-0 color-white text-decoration-none"
              >
                Clear all
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-0">
          <Slider className="Single-card-sliders pb-5" {...settings}>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Rare.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Mythic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={low_rare.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Legendary.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Epic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Common.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Epic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Legendary.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={low_rare.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Mythic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Rare.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Epic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={Mythic.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
                <Col xs={12}>
                  <MasterCard
                    MasterBg={low_rare.src}
                    Character={charactermodel.src}
                    MonsterName="Monster Name"
                  />
                </Col>
              </Row>
            </div>
          </Slider>
        </Col>
      </Row>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="filtermodal"
      >
        <Modal.Header
          className="cloasebtn color-white"
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md={12}>
              <h2 className="color-white fw-extrabold text-center mt-3 mb-3 text-uppercase">
                FILTERS
              </h2>
              <Row>
                <Col md={12}>
                  <Form>
                    <Form.Label className="fw-extrabold color-litepink fs-20 text-uppercase text-center d-block mt-3">
                      nAME
                    </Form.Label>
                    <Form.Group
                      className="mb-0"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={12} className="filter-secion">
                  <Form.Label className="fw-extrabold color-litepink fs-20 text-uppercase text-center d-block mt-3">
                    rarity
                  </Form.Label>
                  <Row className="mobcheckbox">
                    <Col xs={6}>
                      <Form.Group className="mb-2" controlId="formBasic1">
                        <Form.Check type="checkbox" label="COMMON" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="formBasic2">
                        <Form.Check type="checkbox" label="rare" />
                      </Form.Group>
                      <Form.Group className="mb-0" controlId="formBasic3">
                        <Form.Check type="checkbox" label="legendary" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-2" controlId="formBasic4">
                        <Form.Check type="checkbox" label="Low rare" />
                      </Form.Group>
                      <Form.Group className="mb-2" controlId="formBasic5">
                        <Form.Check type="checkbox" label="epic" />
                      </Form.Group>
                      <Form.Group className="mb-0" controlId="formBasic6">
                        <Form.Check type="checkbox" label="mythic" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} className="filter-secion">
                  <Form.Label className="fw-extrabold color-litepink fs-20 text-uppercase text-center d-block mt-3">
                    type
                  </Form.Label>
                  <Row className="mobcheckbox">
                    <Col xs={6}>
                      <Form.Group className="mb-0" controlId="formBasic7">
                        <Form.Check type="checkbox" label="monster" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-0" controlId="formBasic8">
                        <Form.Check type="checkbox" label="weapon" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} className="filter-secion">
                  <Form.Label className="fw-extrabold color-litepink fs-20 text-uppercase text-center d-block mt-3">
                    state
                  </Form.Label>
                  <Row className="mobcheckbox">
                    <Col xs={6}>
                      <Form.Group className="mb-0" controlId="formBasic9">
                        <Form.Check type="checkbox" label="selling" />
                      </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group className="mb-0" controlId="formBasic10">
                        <Form.Check type="checkbox" label="training" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} className="filter-secion text-center">
                  <Button
                    variant="link"
                    className="px-0 color-white text-decoration-none"
                  >
                    Clear all
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Page>
  );
}
