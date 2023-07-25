import React from "react";
import { Col, Row } from "react-bootstrap";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import PrimaryBgHeading from "../primaryBgHeading";
import TechnologyBox from "../technologyBox";
import t1 from "../../assets/img/drysteam.png";
import t3 from "../../assets/img/binary.png";
import Loader from "../layout/loader";
import techBanner from "../../assets/img/techBanner.png";
import rightBanner from "../../assets/img/advancingTopLeft.png";
import leftBanner from "../../assets/img/MaskGroup.png";
import sciBanner from "../../assets/img/Mask_Group.png";
import logoOne from "../../assets/img/EMISSIONSCO2AVOIDANCE.png";
import logoTwo from "../../assets/img/SAFETY.png";
import logoThree from "../../assets/img/POWER SOURCES.png";
import logoFour from "../../assets/img/RECRUITMENT.png";
import logoFive from "../../assets/img/EFFICIENCY  UTILIZATION.png";
import logoSix from "../../assets/img/DEMOGRAPHICSANDENGAGEMENT.png";
import logoSeven from "../../assets/img/LEAKDETECTION.png";
import logoEight from "../../assets/img/GOVERNANCE.png";
import logoNine from "../../assets/img/CYBERSECURITY.png";

const Advancing = () => {
  return (
    <>
      <Loader />
      {/* <InnerBanner title="ADVANCING RESPONSIBILITY" image={techBanner} /> */}
      <InnerBanner
        title="Environmental, Social and Governance"
        image={techBanner}
      />
      <div className="body_wrap_advancing">
        <div className="details_advanicing">
          <p>
            We are very conscious of carbon emissions, climate, and cultural
            values and continue to address and execute effective environmental,
            social, and governance (ESG) criteria using modern technology to
            mitigate and decelerate said environmental effects, while minimizing
            its carbon and environmental footprint.
          </p>
        </div>
        <div className="row">
          <div className="col-xl-6 col-sm-12 col-12">
            <div className="detail_Advancing_para">
              <h3>MATERIAL ESG FACTORS</h3>
              <p>
                Geothermal Core aims to create companies with a positive
                environmental and social impact. However, we are largely focused
                on performance in areas most material to each company. This
                concept of materiality allows us to engage meaningfully with our
                portfolio to directly link ESG with bottom-line investment
                returns.
              </p>
            </div>
          </div>
          {/* <div className='col-1' /> */}
          <div className="col-xl-6 col-sm-12 col-12">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1000"
              className="img_right d-flex justify-content-end"
            >
              <img className="img-fluid" src={rightBanner} alt="" />
            </div>
          </div>
          <div className="col-1 d-md-block d-none" />
        </div>
        <div
          data-aos-duration="700"
          data-aos="fade-left"
          className="botton_advancing"
        >
          <div className="bottom_heading text-center">
            <p>CORE AREAS OF ESG FOCUS</p>
          </div>
          <div className="row bottom_wrap_focus">
            <div className="col-1 d-md-block d-none" />
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="200"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoOne} alt="" />
              </div>
              <span className="text_circle">
                <p>EMISSIONS / CO2 AVOIDANCE</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="400"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoTwo} alt="" />
              </div>
              <span className="text_circle">
                <p>SAFETY</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="600"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoThree} alt="" />
              </div>
              <span className="text_circle">
                <p>POWER SOURCES</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="800"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoFour} alt="" />
              </div>
              <span className="text_circle">
                <p>RECRUITMENT</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1000"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoFive} alt="" />
              </div>
              <span className="text_circle">
                <p>EFFICIENCY / UTILIZATION</p>
              </span>
            </div>
          </div>
          <div className="row bottom_wrap_focus">
            <div className="col-2"></div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1100"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoSix} alt="" />
              </div>
              <span className="text_circle">
                <p>DEMOGRAPHICS AND ENGAGEMENT</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1200"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoSeven} alt="" />
              </div>
              <span className="text_circle">
                <p>LEAK DETECTION</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1300"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoEight} alt="" />
              </div>
              <span className="text_circle">
                <p>GOVERNANCE</p>
              </span>
            </div>
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1400"
              className="col-2 circle-container"
            >
              <div>
                <img className="circle" src={logoNine} alt="" />
              </div>
              <span className="text_circle">
                <p>CYBERSECURITY</p>
              </span>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advancing;
