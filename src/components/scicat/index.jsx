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
import rightBanner from "../../assets/img/scicatBottomLeft.png";
import leftBanner from "../../assets/img/MaskGroup.png";
import sciBanner from "../../assets/img/Mask_Group.png";
import { useNavigate } from "react-router-dom";

const Scicat = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <InnerBanner
        data-aos-duration="700"
        data-aos="fade-up"
        title="SCICAT® TECHNOLOGY"
        image={techBanner}
      />
      <div className="body_wrap">
        <div className="row">
          {/* <div className='d-flex'> */}
          <div className="col-xl-6 col-sm-12 col-12">
            <div className="detail_scicat_">
              <h3>
                Scicat represents proprietary and award-winning 3-d seismic
                technology for enhanced geothermal systems and maximum
                production
              </h3>
              <p>
                SciCat® represents seismic driven proprietary technology that
                measures in-situ 3-D minimum stress which is the key rock
                parameter that governs drilling, fracture stimulation, and
                permeability of geothermal rock formations.
              </p>
            </div>
            <div className="details_scicat_p">
              <p>
                Changes in fractured rock define permeability and geothermal
                reservoir extent, which drives reservoir performance and
                ultimately the production of geothermal energy for optimal
                electricity generation and maximum cash flows.
              </p>
            </div>
          </div>
          {/* <div className='col-1' /> */}
          <div className="col-xl-6 col-sm-12 col-12">
            <div
              data-aos-duration="700"
              data-aos="fade-left"
              data-aos-delay="1000"
              className="img_right"
            >
              <img className="img-fluid" src={sciBanner} alt="" />
            </div>
          </div>
          {/* <div className='col-1' /> */}
          {/* </div> */}
          <div className="bottom_section_orc">
            <div className="bottom_title_name">
              <h3>Other Technology</h3>
            </div>
            <div className="row ">
              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  <img className="img-fluid" src={rightBanner} alt=""></img>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  data-aos-delay="700"
                  className="title_bottom"
                >
                  <h3>Organic Rankine Cycle (ORC) Plant</h3>
                  <p>
                    Geothermal Core uses state-of-the-art compact Organic
                    Rankine Cycle (ORC) geothermal power plants that optimize
                    low-temperature geothermal resources for maximum power
                    production and 98% uptime efficiency.
                  </p>
                  <span
                    className="cursor-pointer"
                    onClick={() => navigate("/technology/orc")}
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

export default Scicat;
