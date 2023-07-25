import React from "react";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import img from "../../assets/img/binaryplant.png";
import { Col, Row } from "react-bootstrap";
import DetailBottomBanner from "./DetailBottomBanner";
import TechnologyBox from "../technologyBox";
import Bottom from "../home/Bottom";
import Loader from "../layout/loader"; 
import scicatBanner from '../../assets/img/greenHydroImages/inner-banner.png';

const BinaryPlant = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="SciCat® TECHNOLOGY" image={scicatBanner}/>
      <PageHeading
        heading="SCICAT REPRESENTS PROPRIETARY AND AWARD-WINNING 3-D SEISMIC TECHNOLOGY FOR ENHANCED GEOTHERMAL SYSTEMS AND MAXIMUM PRODUCTION"
        align="text-start"
      />

      <div className="detail-info-wrap">
        <Row className="gy-5 justify-content-between">
          <Col xxl="6">
            <div data-aos-duration="700" data-aos="fade-up">
              <p className="detail-info-text">
              SciCat® represents seismic driven proprietary technology that measures in-situ 3-D minimum stress which is the key rock parameter that governs drilling, fracture stimulation, and permeability of geothermal rock formations.
              </p>
            </div>
          </Col>

          <Col xxl="6">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="200"
              className="overflow-hidden"
            >
              <img
                src={img}
                alt="ORGANIC RANKINE CYCLE (ORC) PLANT"
                className="plant-info-img"
              />
            </div>
          </Col>

          <Col>
            <div data-aos-duration="700" data-aos="fade-up">
              <p className="detail-info-text">
              Changes in fractured rock define permeability and geothermal reservoir extent, which drives reservoir performance and ultimately the production of geothermal energy for optimal electricity generation and maximum cash flows.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <DetailBottomBanner
        title="Other Technologies"
        techBox1={
          <TechnologyBox
            link="/technology/orc-plant"
            title="ORGANIC RANKINE CYCLE (ORC) PLANT"
            desc="ORGANIC RANKINE CYCLE (ORC) PLANTs use steam directly from a geothermal reservoir to turn turbines"
          />
        }
      />

    </>
  );
}

export default BinaryPlant