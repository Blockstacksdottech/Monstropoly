import { FaChessQueen, FaGift, FaLandmark, FaAngleDoubleUp, FaCoins, FaBolt, FaTwitterSquare, FaTelegram, FaSun, FaMoon, FaCog } from "react-icons/fa";
import { Nav, Row, Col } from "react-bootstrap";
import DarkMode from "./DarkMode";
import { BsDiscord } from "react-icons/bs";
import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <>
      <div className="sidebar mobile-side-menu">
        <div className="sidebar-menu">
          <Nav className="flex-column">
            <Nav.Item className="item" >
              <Nav.Link href="/mynfts" className={currentRoute === '/mynfts' ? 'active menu-btn' : 'menu-btn'}>
                <FaChessQueen className="sidebar-icons" />
                <span>MY NFTS</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link href="/chestshop" className={currentRoute === '/chestshop' ? 'active menu-btn' : 'menu-btn'}>
                <FaGift className="sidebar-icons" />
                <span>CHEST SHOP</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="item">
              <Nav.Link href="/marketplace" className={currentRoute === '/marketplace' ? 'active menu-btn' : 'menu-btn'}>
                <FaLandmark className="sidebar-icons" />
                <span>MARKETPLACE</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link href="/training" className={currentRoute === '/training' ? 'active menu-btn' : 'menu-btn'}>
                <FaAngleDoubleUp className="sidebar-icons" />
                <span>TRAINING</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link href="/stakefarm" className={currentRoute === '/stakefarm' ? 'active menu-btn' : 'menu-btn'}>
                <FaCoins className="sidebar-icons" />
                <span>STAKE / FARM</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link href="/fusion" className={currentRoute === '/fusion' ? 'active menu-btn' : 'menu-btn'}>
                <FaBolt className="sidebar-icons" />
                <span>FUSION</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link href="/" className={currentRoute === '/' ? 'active menu-btn' : 'menu-btn'}>
                <FaCog className="sidebar-icons" />
                <span>setting</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="sidebar-footer">
            <Row className=" d-flex justify-content-between align-items-center m-0">
              <Col className="footfirtcl ps-0">
                <Nav className="d-flex justify-content-center align-items-center">
                  <Nav.Link href="#">9999$</Nav.Link>
                </Nav>
              </Col>
              <Col className="footlastcl pe-0">
                <Nav className="d-flex justify-content-between align-items-center">
                  <Nav.Link href="#">
                    <BsDiscord />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <FaTelegram />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <FaTwitterSquare />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row className=" d-flex justify-content-between align-items-center m-0 mt-2 pt-1">
              <Col className="ps-0">
                <Nav className="d-flex justify-content-center align-items-center">
                  <Nav.Link href="#" className="color-white fw-medium">9999$</Nav.Link>
                </Nav>
              </Col>
              <Col className="pe-0 sidfotlang">
                <div className="py-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <FaSun className="color-white" />
                    </div>
                    <div>
                      <DarkMode />
                    </div>
                    <div>
                      <FaMoon className="color-white" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
