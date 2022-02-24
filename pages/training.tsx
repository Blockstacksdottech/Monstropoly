import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import TrainiSmallCard from "../Component/TrainiSmallCard";
import LayoutHeader from "../Component/LayoutHeader";
import Page from "../Layout/Page";
export default function Training() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          swipeToSlide: true,
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Page>
      <LayoutHeader PageTitle="TRAINING CAMP" filtdisableClass="d-none" />
      <Row>
        <Col xs={12} className="p-0">
          <Slider className="Single-card-sliders pb-5" {...settings}>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
                <Col xs={12} className="mb-5 px-md-4">
                  <TrainiSmallCard />
                </Col>
              </Row>
            </div>
          </Slider>
        </Col>
      </Row>
    </Page>
  );
}
