import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InnerBanner from '../innerBanner'
import PageHeading from '../pageHeading'
import PrimaryBgHeading from '../primaryBgHeading'
import TechnologyBox from '../technologyBox'
import t1 from '../../assets/img/drysteam.png'
import t3 from '../../assets/img/binary.png'
import Loader from '../layout/loader'
import techBanner from '../../assets/img/techBanner.png';

const Technology = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="TECHNOLOGY" image={techBanner}/>
      <PageHeading
        heading="GEOTHERAML CORE USES MODERN STATE-OF-THE-ART ORGANIC RANKINE CYCLE (ORC) POWER PLANTS THAT CAN OPERATE FOR DECADES"
        align="text-start"
      />

      {/* <div className="small-info">
        <Row>
          <Col lg="3" className="d-none d-lg-block"></Col>
          <Col lg="9">
            <div data-aos-duration="700" data-aos="fade-up">
             
            </div>
          </Col>
        </Row>
      </div> */}

      <PrimaryBgHeading heading="TECHNOLOGY WE FOCUS IN" />

      <div className="techno-box-wrap">
        <Row className="gy-4 justify-content-center">
          <Col md="6" xl="4">
            <div data-aos-duration="700" data-aos="fade-right">
              <TechnologyBox
                img={t1}
                show="d-block"
                link="/technology/orc-plant"
                title="ORGANIC RANKINE CYCLE (ORC) PLANT"
                desc="ORGANIC RANKINE CYCLE (ORC) PLANTs use steam directly from a geothermal reservoir to turn turbines"
              />
            </div>
          </Col>

          <Col md="6" xl="4">
            <div
              data-aos-duration="700"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <TechnologyBox
                img={t3}
                show="d-block"
                link="/technology/binary-plant"
                title="SciCat® TECHNOLOGY"
                desc="SciCat defines proprietary technology for Enhanced Geothermal Systems (or EGS) "
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Technology