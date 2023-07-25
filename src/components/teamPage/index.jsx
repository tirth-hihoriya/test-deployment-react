import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Bottom from "../home/Bottom";
import InnerBanner from "../innerBanner";
import Loader from "../layout/loader";
import PageHeading from "../pageHeading";
import Team from "./team";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import teamBanner from "../../assets/img/teamBanner.png";
import Options from "./filter";

const TeamPage = () => {
  const [teamMember, setTeamMember] = useState(Team);
  const [currentCategory, setCurrentCategory] = useState("all");

  const onClickHandler = (teamCategory) => {
    const currentTeam = Team.filter(({ region }) => region === teamCategory);
    setTeamMember(currentTeam);

    setCurrentCategory(teamCategory);
  };

  return (
    <>
      <Loader />
      <InnerBanner title="geothermal core team" image={teamBanner} />
      {/* <PageHeading heading="the technical team at geothermal core consists of subject matter experts with over 230 years of combined oil and gas operations experience. Domain expertise includes supply chain experts, drilling and reservoir engineers, PPA experts, as well as geoscience PhD researchers currently analyzing the most optimal geothermal locations to deploy Organic rankine cycle geothermal plants near Houston and greater texas" /> */}

      {/* <div data-aos-duration="700" data-aos="fade-up">
        <div className="team-filter-bar">
          <p className="filter-title">Filter:</p>
          <div className="btn-wrap d-flex aling-items-center">
            <button
              className={`btn filter-btn ${
                currentCategory === "all" && "active"
              }`}
              onClick={() => {
                setTeamMember(Team);
                setCurrentCategory("all");
              }}
            >
              All
            </button>
            <button
              className={`btn filter-btn ${
                currentCategory === "USA" && "active"
              }`}
              onClick={() => {
                onClickHandler("USA");
              }}
            >
              USA
            </button>
            <button
              className={`btn filter-btn ${
                currentCategory === "Europe" && "active"
              }`}
              onClick={() => {
                onClickHandler("Europe");
              }}
            >
              Europe
            </button>
            <button
              className={`btn filter-btn ${
                currentCategory === "India" && "active"
              }`}
              onClick={() => {
                onClickHandler("India");
              }}
            >
              India
            </button>
          
          </div>
        </div>
      </div>  */}
      <br />
      <br />
      <div data-aos-duration="700" data-aos="fade-up" className="">
        <div className="row">
          <div className="col-md-3">
            <Options setTeamMember={setTeamMember} />
          </div>
          <div className="col-md-9">
            <motion.div layout className="gy-5 row">
              {teamMember.map((team) => {
                return (
                  <motion.div
                    layout
                    className="col-xxl-3 col-md-4 col-6"
                    key={team.id}
                  >
                    <div className="team-inner-wrap">
                      <div className="team-inner-img">
                        <img src={`${team.img_path}`} alt="" />
                      </div>

                      <div className="team-inner-info">
                        <h6 className="team-inner-name">{team.name}</h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="team-inner-position">{team.position}</p>

                          {team.linkedIn && (
                            <a href={team.linkedIn} target="_blank">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default TeamPage;
