import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/loader";
import About from "../home/About";
import BannerContatctUs from "./BannerContactUs";
import Bottom from "../home/Bottom";
import Brief from "../home/Brief";
import Info from "../home/Info";
import Insights from "../home/Insights";
import Numbers from "../home/Numbers";
import Plants from "../home/Plants";
import Team from "../home/Team";
import Aos from "aos";
import card1 from "../../assets/img/homePageMiddleLeft.png";
import card2 from "../../assets/img/Mask_Group.png";
import rightimg from "../../assets/img/greenHydroImages/homePageTopRight.png";
import ban from "../../assets/img/greenHydroImages/earth-core-structure.png";
import acrossGlobe from "../../assets/img/greenHydroImages//homePageBottomleft.png";

const DashboardPage = ({ onLearnMore, onLets }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  const LearnMore = () => {
    return navigate("/about-us");
  };
  const lets = () => {
    return navigate("/contact/us");
  };

  return (
    <>
      <Loader />
      <BannerContatctUs onLearnMore={LearnMore} onLets={lets} />
      <div className="main-body">
        <div className="future-text-wrap">
          <div className="banner_head">
            {/* <div className="row text-center banner_head_text">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="100"
                className="col20"
              >
                <div className="title_ ">
                  <h5>1.4 GW</h5>
                  <p>TEXAS, USA</p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="200"
                className="col20"
              >
                <div className="title_ ">
                  <h5>100 MW</h5>
                  <p>UTTAR PRADESH, INDIA</p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="300"
                className="col20"
              >
                <div className="title_ ">
                  <h5>100 MW</h5>
                  <p>UTTARAKHAND, INDIA</p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="400"
                className="col20"
              >
                <div className="title_ ">
                  <h5>120 MW</h5>
                  <p>CARRIBEAN ISLANDS</p>
                </div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="500"
                className="col20"
              >
                <div className="title_ ">
                  <h5>800 MW</h5>
                  <p>LOUISIANA, USA</p>
                </div>
              </div>
            </div> */}

            <div className="row gx-5 gy-5 future-statement">
              <div className="col-xl-6 col-sm-12 col-12 d-flex align-items-center">
                <div className="text_right">
                  <h5
                    data-aos-duration="700"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  >
                    Fueling a Sustainable Future with Hydrogen Energy Solutions.
                  </h5>
                  <p
                    data-aos-duration="700"
                    data-aos="fade-left"
                    data-aos-delay="700"
                    className="mt-2 mb-2"
                  >
                   At GreenAmmonia196, we are committed to driving a greener and more sustainable future through the power of hydrogen. As a leading player in the renewable energy sector, we strive to revolutionize the way we produce, store, and utilize energy, with a primary focus on hydrogen-based solutions. With the world facing pressing environmental challenges, our company is dedicated to harnessing the potential of hydrogen to propel us towards a cleaner and more resilient energy landscape.
                  </p>
                  <div className="home-text-box">
                    <p>
                    At GreenAmmonia196, we fuel a sustainable future, harnessing the power of hydrogen for a cleaner and greener world.
                    </p>
                  </div>
                  <br /> <br />
                  <a onClick={() => navigate("about/")} className="learn-more">
                    {" "}
                    Know more
                  </a>
                </div>
              </div>

              <div className="col-xl-6 col-sm-12 col-12">
                <div
                  data-aos-duration="700"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <div className="d-flex justify-content-end">
                    <img src={rightimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos-duration="700"
            data-aos="fade-up"
            data-aos-delay="1000"
            className="banner_head"
          >
            <div className="row mt-5">
              <div className="col-12 relative">
                <img src={ban} alt="" className="banner-dashboard"></img>
                <div className="developing-banner">
                  <h3 className="seperator-banner-text">
                  Leading the Charge towards Sustainability: A Renewable Energy & Power Pioneer.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-focus">
          <div>
            <div className="banner_head mb-5">
              {/* <div className="row">
                <div className="col-12">
                  <div className="tech_">
                    <div className="text-center">
                      <span className="title_1">OUR TECHNOLOGY</span>
                      <h6 className="title_2">
                        Our proprietary SciCat Geo 3D seismic technology and
                        Organic Rankine Cycle turbines combine for efficient
                        geothermal power production in sedimentary geology.
                      </h6>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="row gy-5 mt-5 mb-5">
                <div className="col-md-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-left"
                    className="card h-100"
                  >
                    <img src={card2} alt="..." />
                    <div className="card-body card__">
                      <h5 className="card-title text-left">
                        SciCat Technology
                      </h5>
                      <p className="card-text  focus-text">
                        SciCat® has developed proprietary and award winning
                        seismic geomechanics technology that measures in-situ 3D
                        minimum horizontal stress which is the key rock
                        parameter that governs hydraulic fracture stimulation of
                        tight geologic formations, not only for enhanced energy
                        production, but for controlled fracture design and
                        minimal footprint.
                      </p>
                      <span onClick={() => navigate("technology/scicat")}>
                        {" "}
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <div
                    data-aos-duration="700"
                    data-aos="fade-right"
                    className="card h-100"
                  >
                    <img src={card1} alt="..." />
                    <div className="card-body card__">
                      <h5 className="card-title text-left">
                        Organic Rankine Cycle (ORC) Plant
                      </h5>

                      <p className="card-text text-left focus-text">
                        Geothermal Core uses state-of-the-art compact Organic
                        Rankine Cycle (ORC) geothermal power plants that
                        optimize low-temperature geothermal resources for
                        maximum power production and 98% uptime efficiency.
                      </p>
                      <span onClick={() => navigate("technology/orc")}>
                        {" "}
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="power-generation-info-wrap">
          <div className="box_content">
            <div className="row power-numbering">
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="600"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>100+ GW</h1>
                  <p>by 2030</p>
                </div>

                <div className="title_3">Global green hydrogen capacity</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="500"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>$250 B</h1>
                  <p>by 2025</p>
                </div>
                <div className="title_3">projected global hydrogen market</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="400"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>15%</h1>
                  <p>increase in </p>
                </div>
                <div className="title_3">efficient electrolysis​</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="300"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>30%</h1>
                  <p>lower </p>
                </div>
                <div className="title_3">carbon emissions</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="200"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>1°</h1>
                  <p>per decade</p>
                </div>
                <div className="title_3">Energy Decline Rate​</div>
              </div>
              <div
                data-aos-duration="700"
                data-aos="fade-down"
                data-aos-delay="100"
                className="col-2"
              >
                <div className="sm_box">
                  <h1>~$.03</h1>
                </div>
                <div className="title_3">Levelized Cost Of Energy (ICOE)​</div>
              </div>
            </div>
            <div className="row gx-4 gy-5">
              <div
                data-aos-duration="700"
                data-aos="fade-right"
                className="col-xl-6 col-sm-12 col-12"
              >
                <div className="">
                  <img
                    src={acrossGlobe}
                    className="bottom-dashbord-img"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 col-12 d-flex align-items-center">
                <div
                  data-aos-duration="700"
                  data-aos="fade-left"
                  className="title_4 d-grid"
                >
                  <h3>Sustainable Partnerships for a Greater Impact.</h3>
                  <p>
                  Collaboration is the cornerstone of our approach to sustainability. We actively seek partnerships with like-minded businesses, governments, and organizations, aiming to create a network of stakeholders committed to promoting hydrogen as a viable and eco-friendly energy alternative. By working together, we can amplify our impact and accelerate the transition to a sustainable energy future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
