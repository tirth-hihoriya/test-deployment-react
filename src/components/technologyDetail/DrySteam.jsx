import React from "react";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import img from "../../assets/img/dryplant.png";
import { Col, Row } from "react-bootstrap";
import DetailBottomBanner from "./DetailBottomBanner";
import TechnologyBox from "../technologyBox";
import Loader from "../layout/loader";
import orcBanner from '../../assets/img/orcBanner.png';


const DrySteam = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="ORGANIC RANKINE CYCLE (ORC) PLANT" image={orcBanner}/>
      <PageHeading
        heading="Geothermal Core utilizes modern state-of-the-art compact geothermal binary-cycle power plants using Organic Rankine Cycle (ORC) technology that optimizes relatively low-temperature geothermal resources for maximum power production and (up to 98%) uptime efficiency. "
        align="text-start"
      />

      <div className="detail-info-wrap">
        <Row className="gy-5 justify-content-between">
          <Col xxl="6">
            <div data-aos-duration="700" data-aos="fade-up">
              <p className="detail-info-text">
              An Organic Rankine Cycle (ORC) system is a closed thermodynamic cycle used for power production from medium temperature heat sources found in “hot” sedimentary basins, <span className="text-danger"
              > like in Texas and the Gulf Coast region.</span> This technology allows for efficient exploitation of low-grade heat that otherwise would be wasted.              </p>
             
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
          <Col xxl="12">
          <p className="detail-info-text">
              The ORC power plant is suitable in locations where moderate-enthalpy reservoirs exist at relatively lower temperature of al least 120°C (248°F). Hot water from deep geothermal sedimentary aquifers is passed through a heat exchanger at the surface which contains a secondary organic fluid with a lower boiling point, allowing for the water to flash into vapor at a lower temperature which drives the turbine.
              </p>
          </Col>

          <Col>
              <h3>Additional ORC advantages include: </h3>
              <li className="detail-info-text">
              Modular compact configuration and customizable to the resource </li>
              <li className="detail-info-text"> Flexibility of operation and suitable for varying load cases</li>
              <li className="detail-info-text">Low-cost operations and maintenance (less than $.015 / kWh)</li>
              <li className="detail-info-text">Easy operation / fully automated plant </li>
              <li className="detail-info-text"> No need for dedicated personnel to operate, if suitable. </li>

              
          
          </Col>
        </Row>
      </div>

      <DetailBottomBanner
        title="Other Technologies"
        techBox2={
          <TechnologyBox
            title="SciCat® TECHNOLOGY"
            desc="SciCat defines proprietary technology for Enhanced Geothermal Systems (or EGS)"
            link="/technology/binary-plant"
          />
        }
      />
    </>
  );
};

export default DrySteam;
