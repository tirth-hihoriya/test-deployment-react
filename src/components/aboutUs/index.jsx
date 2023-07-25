import React, { useEffect, useState } from "react";
// import { Col, Row } from "react-bootstrap";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import Team from "./team";

// import Team from "../team";
// import jay from "../../assets/img/team/jayy.png";
// import andy from "../../assets/img/team/Andrew.png";
import rightimage from "../../assets/img/AboutusImgOne.png";
import bannerImage from "../../assets/img/Group 13218.png";
import bottomgroup from "../../assets/img/aboutuslong.png";
import bottomgrouprightone from "../../assets/img/AboutUsRightOne.png";
import img1 from "../../assets/img/team/1.png";
import Bottom from "../home/Bottom";
import Loader from "../layout/loader";
import Aos from "aos";

import aboutBanner from "../../assets/img/greenHydroImages/inner-banner.png";

const AboutUs = (props) => {
  const [teamFilter, setTeamFilter] = useState(Team);
  const [active, setActive] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);

  let filterTeam = [];

  const handleFilter = (val) => {
    setActive(val);
    setTeamFilter(Team);
  };

  const handleFilterFounder = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (res.designation === "CTO" || res.designation === "CEO") {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  const handleFilterOperations = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (res.designation === "Operations") {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  const handleFilterBusiness = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (res.designation === "Business") {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  const handleFilterFinance = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (res.designation === "Financial " || res.designation === "Finance") {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  const handleFilterTech = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (
        res.position === "Chief Engineering Officer" ||
        res.designation === "CTO"
      ) {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  const handleFilterLegal = (val) => {
    setActive(val);
    filterTeam = Team.filter((res) => {
      if (res.position.includes("Legal")) {
        return res;
      }
    });
    setTeamFilter(filterTeam);
  };

  return (
    <>
      <Loader />
      <InnerBanner
        data-aos-duration="700"
        data-aos="fade-up"
        data-aos-delay="1000"
        title="About Us"
        image={aboutBanner}
      />
      <div className="middle_section_aboutus">
        <div className="banner_section">
          <div className="">
            <div className="row position-relative">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="1000"
                className="col-12"
              >
                <div className="banner_text">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission at Geothermal Core is the successful deployment
                    of modularized ORC geothermal power plants within Texas, the
                    United States, and around the globe where geothermal
                    resources are proven by mature oil & gas provinces and
                    subsequent data. We strive to produce an emissions free
                    renewable and alternative energy source that provides
                    low-cost baseload electricity,24/7 and 365 days a year.
                  </p>
                </div>
                <div className="banner_Image_about">
                  <img
                    src={bannerImage}
                    alt=""
                    className="img-fluid w-100"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="bottom_text_section">
          <div className="">
            <div className="row">
              <div
                data-aos-duration="700"
                data-aos="fade-left"
                data-aos-delay="1000"
                className="col-lg-6 col-sm-12 col-12"
              >
                <h3>
                  Geothermal Core strives to produce an emissions free renewable
                  energy source that provides low-cost (LCOE) dispatchable
                  baseload electricity for power providers, heavy industry, data
                  centers, housing developments, and commercial applications, on
                  and off the grid.
                </h3>
                <p>
                  Geothermal energy has numerous advantages. It’s reliable and
                  not intermittent due to weather and provides power generation
                  and electrical grid stability 24/7, 365 days a year. Most
                  importantly, geothermal power is dispatchable, meaning it does
                  not require battery storage, unlike other renewable forms of
                  energy.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                  className="img-about-us d-flex justify-content-end"
                >
                  <img src={bottomgrouprightone} alt="" className="w-75"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bottom-section-about">
            <div className="about-us-mission">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-12 ">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-left"
                    className="text_area_"
                  >
                    <h3>
                      Geothermal core's mission is the deployment of the first
                      geothermal power plant in texas
                    </h3>
                    <p>
                      Combined with recent technological advances in heat
                      exchangers, turbines, and generators, geothermal
                      energy-based electricity has become a desirable and
                      competitive renewable alternative that’s abundant and
                      inexpensive. Geothermal Core will successfully develop and
                      responsibly produce geothermal energy and electricity.
                    </p>
                    <div className="bottom_section_p">
                      <p>
                        At Geothermal Core, we're not just producing energy -
                        we're revolutionizing a sustainable future.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos-duration="700"
                  data-aos="fade-right"
                  className="col-lg-6 col-sm-12 col-12 mt-3 mt-lg-0  d-flex justify-content-end"
                >
                  <img src={rightimage} alt="" className="w-75"></img>
                </div>
              </div>
            </div>
            <div className="row team-filter-head">
              <div className="col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 col-12 ">
                    <p className="p-1">Our Team</p>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-12 filter-team">
                    <div className="p-1">
                      <button
                        onClick={(active) => handleFilter(1)}
                        className={
                          active === 1
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        All{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={(active) => handleFilterFounder(2)}
                        className={
                          active === 2
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Founder{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => handleFilterOperations(3)}
                        className={
                          active === 3
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Operations{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => handleFilterBusiness(4)}
                        className={
                          active === 4
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Business{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => handleFilterFinance(5)}
                        className={
                          active === 5
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Finance{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => handleFilterTech(6)}
                        className={
                          active === 6
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Technology{" "}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        onClick={() => handleFilterLegal(7)}
                        className={
                          active === 7
                            ? "btn btn-success  rounded-0"
                            : "btn btn-outline-success  rounded-0"
                        }
                      >
                        {" "}
                        Legal{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 mt-2">
                <div className="row">
                  {teamFilter.map((item) => (
                    <div key={item.id} className="col-sm-2 col-12 col20_team">
                      <div
                        data-aos-duration="700"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                        className="team_img"
                      >
                        <img src={item.img_path} className="img-fluid" />
                        <div className="team_text">
                          <p>{item.name}</p>
                          <span>{item.position}</span>
                          {/* <div className="team_text_1">
                    </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
