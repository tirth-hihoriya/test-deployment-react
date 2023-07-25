import React, { useEffect } from "react";
// import { Col, Row } from "react-bootstrap";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";

// import Team from "../team";
// import jay from "../../assets/img/team/jayy.png";
// import andy from "../../assets/img/team/Andrew.png";
import inside from "../../assets/img/inside.png";
import Bottom from "../home/Bottom";
import Loader from "../layout/loader";
import Aos from "aos";

import aboutBanner from '../../assets/img/greenHydroImages/inner-banner.png'

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Loader />
      <InnerBanner title="About Us" image = {aboutBanner}/>
      <PageHeading heading="GEOTHERMAL CORE'S MISSION IS THE DEPLOYMENT OF THE FIRST GEOTHERMAL POWER PLANT IN TEXAS​" />

      <div className="about-owner">
        <div className="about-heading-wrap">
          <div className="about-heading">
            <div data-aos-duration="500" data-aos="fade-up">
              <p className="text-center">Expertise and Integrity</p>
            </div>
          </div>
        </div>

        {/* <div className="owner-detail">
          <Row className="align-items-md-end justify-content-between gy-4">
            <Col lg="6">
              <div className="owner-img-wrap">
                <div data-aos-duration="700" data-aos="fade-right">
                  <Team img={jay} name="Dr. Jay Patel" position="CEO" />
                </div>
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <Team
                    img={andy}
                    name="Dr. Andrew Davidoff"
                    position="Founder & CTO"
                  />
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div data-aos-duration="700" data-aos="fade-up">
                <p className="about-section-title">
                  Dr. jay patel & Dr. Andrew davidoff
                </p>
                <p className="about-section-desc">
                  have worked together for more than two decades, investing $3.5
                  billion through four distinct commodity price cycles. In this
                  time, they have learned the value of specialization, being in
                  the flow of the energy value chain and moving with dexterity
                  to identify and capitalize on emerging trends.
                </p>
              </div>
            </Col>
          </Row>
        </div> */}

        <div className="mission-wrap">
          <div className="mission-content">
            <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1000">
              <p className="mission">
                Combined with recent technological advances in heat exchangers,
                turbines, and generators, geothermal energy-based electricity
                has become a desirable and competitive renewable alternative
                that’s abundant and inexpensive. Geothermal Core will successfully
                develop and responsibly produce geothermal energy and
                electricity.
              </p>

              <p className="mission mt-3">
                Our mission at Geothermal Core is the successful deployment of modularized
                ORC geothermal power plants within Texas, the United States, and
                around the globe where geothermal resources are proven by mature
                oil & gas provinces and subsequent data. We strive to produce an
                emissions free renewable and alternative energy source that
                provides low-cost baseload electricity,24/7 and 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-inner-section">
        <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1000">
          <h4 className="inner-about-title">
            SMALLEST SURFACE FOOTPRINT OF ANY POWER SOURCE PER MW INSTALLED
            CAPACITY
          </h4>
        </div>

        <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1000">
          <div className="about-info-wrap">
            <div className="earth-img">
              <img src={inside} alt="" />
            </div>

            <div className="about-info-content">
              <p className="highlight-text">
                GEOTHERMAL POWER PLANTS EMIT ABOUT 99 PERCENT LESS CARBON
                DIOXIDE THAN FOSSIL FUEL POWER PLANTS OF SIMILAR SIZE.
              </p>

              <p className="desc-text">
                Geothermal Core is very conscious of carbon emissions, climate,
                and cultural values and continues to address and execute
                effective environmental, social, and governance (ESG) criteria
                using modern technology to mitigate and decelerate said
                environmental effects, while minimizing its carbon and
                environmental footprint, and any surface degradation, unlike
                solar and wind.​
              </p>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </>
  );
};

export default About;
