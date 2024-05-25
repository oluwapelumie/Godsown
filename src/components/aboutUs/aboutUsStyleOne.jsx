import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      /> */}
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  {/* <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                  Godownme Global Resouses<span>.</span>
                  </h1>
                  <p>
                  Godownsmeglobalresources a shades of all positivity
It's a fact that people encounter various problems during their
travels, problems like how to get the best fares, mistakes in booking
their flight tickets, paying higher than they should have paid for tickets,
deciding or planning for a legit , fun filled tour destinations to travel to
and or being scammed for tickets, Visa's and other areas of their travel needs <br/>
GOM ✈✈✈ company in a bid to sort out these problems offer the following services professionally;
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    Local and international flight booking
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Hotel Reservation
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Local and international tour packages
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Travel insurance
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                  G.O.M ✈✈✈ keeps u Happy while sorting your travel needs; hence they are called *Godownsme🥰🥰🥰
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
