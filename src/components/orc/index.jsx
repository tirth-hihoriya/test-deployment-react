import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import PrimaryBgHeading from "../primaryBgHeading";
import TechnologyBox from "../technologyBox";
import t1 from "../../assets/img/drysteam.png";
import t3 from "../../assets/img/binary.png";
import Loader from "../layout/loader";
import techBanner from "../../assets/img/orcBanner.png";
import rightBanner from "../../assets/img/homePageMiddleLeft.png";
import leftBanner from "../../assets/img/orcTech.png";
import { useNavigate } from "react-router-dom";

const Orc = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Loader />
      <InnerBanner
        title="ORGANIC RANKINE CYCLE (ORC) PLANT"
        image={techBanner}
      />
      <div className="body_wrap">
        <div className="row">
          <div className="col-xl-6 col-sm-12 col-12">
            <div className="detailsOne_">
              <p>
                Geothermal core utilizes modern state-of-the-art compact
                geothermal binary-cycle power plants using organic rankine cycle
                (orc) technology that optimizes relatively low-temperature
                geothermal resources for maximum power production and (up to
                98%) uptime efficiency.
              </p>
            </div>
            <div className="details_one">
              <p>
                An Organic Rankine Cycle (ORC) system is a closed thermodynamic
                cycle used for power production from medium temperature heat
                sources found in “hot” sedimentary basins, like in Texas and the
                Gulf Coast region. This technology allows for efficient
                exploitation of low-grade heat that otherwise would be wasted.
              </p>
            </div>
            <div className="details_two">
              <p>
                The ORC power plant is suitable in locations where
                moderate-enthalpy reservoirs exist at relatively lower
                temperature of al least 120°C (248°F). Hot water from deep
                geothermal sedimentary aquifers is passed through a heat
                exchanger at the surface which contains a secondary organic
                fluid with a lower boiling point, allowing for the water to
                flash into vapor at a lower temperature which drives the
                turbine.
              </p>
            </div>
          </div>
          {/* <div className='col-1' /> */}
          <div className="col-xl-6 col-sm-12 col-12">
            <div
              data-aos-duration="700"
              data-aos="fade-right"
              data-aos-delay="1000"
              className="img_right"
            >
              <img className="img_right" src={rightBanner} alt="" />
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              className="right_text"
            >
              <div className="inner_text">
                <p className="inner_text_heading">
                  Additional ORC advantages include:
                </p>
                <p className="inner_text_details">
                  <span className="pe-3">|</span>Modular compact configuration
                  and customizable to the resource
                </p>
                <p className="inner_text_details">
                  <span className="pe-3">|</span>Flexibility of operation and
                  suitable for varying load cases
                </p>
                <p className="inner_text_details">
                  <span className="pe-3">|</span>Low-cost operations and
                  maintenance (less than $.015 / kWh)
                </p>
                <p className="inner_text_details">
                  <span className="pe-3">|</span>Easy operation / fully
                  automated plant
                </p>
                <p className="inner_text_details">
                  <span className="pe-3">|</span> No need for dedicated
                  personnel to operate, if suitable.
                </p>
              </div>
            </div>
          </div>
          {/* <div className='col-1' /> */}
          <div className="bottom_section_orc">
            <div className="bottom_title_name">
              <h3>Our Technology</h3>
            </div>
            <div className="row">
              <div
                data-aos-duration="700"
                data-aos="fade-right"
                data-aos-delay="1000"
                className="col-xl-6 col-sm-12 col-12 "
              >
                <img className="img_right" src={leftBanner} alt=""></img>
              </div>
              {/* <div className='col-1' /> */}
              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-left"
                  className="title_bottom"
                >
                  <h3>SciCat Technology</h3>
                  <p>
                    SciCat technology power plants transfer the heat from
                    geothermal hot water to another liquid. It represents
                    proprietary and award-winning 3-d seismic technology for
                    enhanced geothermal systems and maximum production
                  </p>
                  <span
                    className="cursor-pointer"
                    onClick={() => navigate("/technology/scicat")}
                  >
                    {" "}
                    Know More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orc;
