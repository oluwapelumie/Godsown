import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUsSectionOne() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <img src="/img/others/11.png" alt="About Us Image" />
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2--- mb-30">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  About Us
                </h6>
                <h1 className="section-title">
                  Godownme Global Resouses
                </h1>
                <p>
                Godownsmeglobalresources a shades of all positivity
    It's a fact that people encounter various problems during their travels, problems like how to get the best fares,
    mistakes in booking their flight tickets, paying higher than they
    should have paid for tickets, deciding or planning for a legit , fun filled tour destinations to
    travel to and or being scammed for tickets, Visa's and other areas of their travel needs
                </p>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-4"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                  Travel Services
                    {/* <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      The Perfect Residency
                    </Link> */}
                  </h4>
                  <p>
                  We get best deals for our clients from the airlines, hotels and cruise operators, notify them of promos, loyalty programs and discount deals
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-call-center-agent"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                  Holiday And Vacation
                    {/* <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Global Architect Experts
                    </Link> */}
                  </h4>
                  <p>
                  Feeling overwhelmed by work or like your work-life balance is out of whack? Importance of taking vacation cannot be ignored
                  </p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-3">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-maps-and-location"></i>
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h4>
                  International flight bookings
                    {/* <Link href="https://quarter-nextjs.netlify.app/service/buy-a-home">
                      Built-in Storage Cupboards
                    </Link> */}
                  </h4>
                  <p>
                  We can also render assistance for any Documents, PROOF OF FUND,company letters, any international payment. Etc*
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionOne;
