import React from "react";
import InnerBanner from "../innerBanner";
import { Col, Row } from 'react-bootstrap'
import PageHeading from '../pageHeading'

const News = () => {
  return (
    <>
      <InnerBanner title="NEWS &amp; INSIGHTS" />
      <div className="news">
        <div className="news-filter-bar">
          <p className="filter-title">Filter:</p>
          <div className="btn-wrap d-flex aling-items-center">
            <button className="btn filter-btn active">All</button>
            <button className="btn filter-btn">Portfolio News</button>
            <button className="btn filter-btn">PRESS RELEASES</button>
            <button className="btn filter-btn">Media</button>
          </div>
        </div>
        <Row className="justify-content-between  text-center mt-5 pt-5 mb-5">
          <Col lg="5" className="years">
            <p className="year-title">All</p>
            <div className="small-info-text">2023</div>
            <div className="small-info-text">2022</div>
            <div className="small-info-text">2021</div>
            {/* <div className="small-info-text">2020</div>
            <div className="small-info-text">2019</div>
            <div className="small-info-text">2018</div>
            <div className="small-info-text">2017</div>
            <div className="small-info-text">2016</div>
            <div className="small-info-text">2015</div>
            <div className="small-info-text">2014</div> */}
          </Col>
          <Col lg="7">
            <div className="detail-tit">
              <div className="detail-title-wrap">
                <div data-aos-duration="700" data-aos="fade-up">
                  <Row className="justify-content-between">
                    <Col lg="8">
                      <div className="highlight-text d-flex">
                        <p className="date-color">Mar 02, 2023, 11:24 ET | </p>
                        <p> &nbsp;Geothermal Core media</p>
                      </div>

                      <PageHeading
                        heading="Geothermal Core and GEG Power Partnering to Develop First Geothermal Power Plant in Texas"
                        align="text-start"
                      />
                      <div className="small-info-text">
                      HOUSTON, March 2, 2023 /PRNewswire/ -- HYDROGEN196 INC., a geothermal exploration and production power company, and GEG, ehf, a geothermal developer and EPC company, have entered into a definitive agreement to form a Joint Venture ("JV").  The primary focus of the JV is the development of clean baseload electricity in Texas powered by geothermal energy.  The partners are now engaged with origination of the first utility-scale, geothermal power plant in the Lone Star State.
                      </div>
                      <div className="read-more">
                        <a target="_blank" href="https://www.prnewswire.com/news-releases/geothermal-core-and-geg-power-partnering-to-develop-first-geothermal-power-plant-in-texas-301761148.html" className="text-btn">Read More </a>
                      </div>
                    </Col>
                    <Col lg="4"></Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="detail-tit d-none">
              <div className="detail-title-wrap">
                <div data-aos-duration="700" data-aos="fade-up">
                  <Row className="justify-content-between">
                    <Col lg="8">
                      <div className="highlight-text d-flex">
                        <p className="date-color">November 4, 2022 |</p>
                        <p>Geothermal Core media</p>
                      </div>

                      <PageHeading
                        heading="Oil and Gas Make Renewables Green with Envy"
                        align="text-start"
                      />
                      <div className="small-info-text">
                        Volutpat sed cras ornare arcu dui vivamus arcu felis.
                        Quis enim lobortis scelerisque fermentum dui faucibus.
                        Dictum at tempor commodo ullamcorper. Tincidunt nunc
                        pulvinar sapien et ligula ullamcorper.
                      </div>
                      <div className="read-more">
                        <a className="text-btn">Read More </a>
                      </div>
                    </Col>
                    <Col lg="4">{/* hiihi */}</Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default News;
