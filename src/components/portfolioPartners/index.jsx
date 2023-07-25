import React from "react";
import InnerBanner from "../innerBanner";
import PageHeading from "../pageHeading";
import About from '../home/About'
import Bottom from '../home/Bottom'
import { Col, Row } from "react-bootstrap";
import Loader from "../layout/loader";

const Contact = () => {
  return (
    <>
    <Loader />
      <InnerBanner title="PARTNERS" />
      <div className="portfolio-partners">
      <PageHeading heading="Our portfolio is an extension of our firm, and our management teams are our long-term partners – many across multiple investments." />
      <About title = 'Geo Thermal Partners'/>
      <Bottom/>
      </div>
      
    </>
  );
};

export default Contact;
