import React from "react";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import img from "../../assets/img/flashplant.png";
import { Col, Row } from "react-bootstrap";
import DetailBottomBanner from "./DetailBottomBanner";
import TechnologyBox from "../technologyBox";
import Bottom from "../home/Bottom";
import Loader from "../layout/loader";

const FlashSteam = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="FLASH STEAM PLANT" />
      <PageHeading
        heading="In a flash steam power plant, geothermal-heated water under pressure is estranged in a surface vessel, which is called a steam separator. The steam is delivered to the turbine and then a generator is used to generate electricity. The liquid is injected back into the reservoir."
        align="text-start"
      />

      <div className="detail-info-wrap">
        <Row className="gy-5 justify-content-between">
          <Col xxl="5">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              className="overflow-hidden"
            >
              <img
                src={img}
                alt="ORGANIC RANKINE CYCLE (ORC) PLANT"
                className="plant-info-img"
              />
            </div>
          </Col>

          <Col xxl="6">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="detail-info-text">
                There are locations where we can find geothermally heated water
                reservoirs at a high temperature of over 350 Fahrenheit. In such
                locations, flash steam power plants develop. This hot water
                reservoir is known as brine. This brine is transfer to a vessel
                where it cools. As it cools, the fluid quickly turns into vapor
                (flash) and the waste brine is injected back into the earth.
                These vessel-generated vapors drive the turbine, and the rest of
                the procedure is the same as in dry steam power plants.
              </p>
            </div>
          </Col>

          <Col>
            <div data-aos-duration="700" data-aos="fade-up">
              <p className="detail-info-text">
                The most common type of power plant to date is a flash power
                plant, where a mixture of liquid water and steam is produced
                from the wells. At a flash facility, hot liquid water from deep
                in the earth is under pressure and thus kept from boiling. As
                this hot water moves from deeper in the earth to shallower
                levels, it quickly loses pressure, boils and ‘flashes’ to steam.
                The steam is separated from the liquid in a surface vessel
                (steam separator) and is used to turn the turbine, and the
                turbine powers a generator. Flash power plants typically require
                resource temperatures in the range of 350–500°F (177° to 260°C).
                A number of technology options can be used with a flash system.
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
        techBox2={
          <TechnologyBox
            link="/technology/binary-plant"
            title="BINARY CYCLE PLANT"
            desc="Binary cycle power plants transfer the heat from geothermal hot water to another liquid."
          />
        }
      />

      <Bottom />
    </>
  );
};

export default FlashSteam;
