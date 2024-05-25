import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

function AboutUsStyleTwo({ sectionSpace }) {
  const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: "/img/img-slide/11.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/12.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/img-slide/13.jpg",
      width: 800,
      height: 570,
    },
  ];

  return (
    <>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Counter, Fullscreen, Download]}
      />

      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">Our Core Serives</h1>
                  <p>
                  We realize that to best serve our clients, we must provide the broadest product
                  offerings in the most efficient manner using the latest technological solutions.
                  Therefore outside our general services we also offer amongst other things
                  </p>
                </div>
                <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li>Visa Assistant</li>
                  <li>Flight Ticket</li>
                  <li>Hotel Booking</li>
                  <li>Vacation Packages</li>
                  <li>Study and work</li>
                  <li>Travel Insuance</li>
                  <li>General Contract</li>
                </ul>
                <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                  <li>
                    {/* <span>
                      3 <i className="flaticon-bed"></i>
                    </span> */}
                    Canada
                  </li>
                  <li>
                    {/* <span>
                      2 <i className="flaticon-clean"></i>
                    </span> */}
                    United State
                  </li>
                  <li>
                    {/* <span>
                      2 <i className="flaticon-car"></i>
                    </span> */}
                    United Kingdom
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    Europe
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    Spain
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    France
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    Italy
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    Portugal
                  </li>
                  <li>
                    {/* <span>
                      3450
                      <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
                    </span> */}
                    Ireland
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                  We can also render assistance for any Documents, PROOF OF FUND,company letters, any international payment. Etc*<br/>

We have one of the cheapest deal when it come  to admission Processing because we cooperate and licenced with more than  350 universities in the above countries for more inquiry
                  </p>
                </div>
                <div className="ltn__list-item-2 ltn__list-item-2-img mb-50">
                  <PhotoAlbum
                    layout="rows"
                    photos={slides}
                    targetRowHeight={150}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img src="/img/others/9.png" alt="About Us Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleTwo;
