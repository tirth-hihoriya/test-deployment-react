import React from "react";
import { Col, Row } from "react-bootstrap";
import inside from '../../assets/img/inside.png'

const Brief = () => {
  return (
    <section className="brief-section">
      <Row className="g-0">
        <Col lg="6">
          <div className="brief-content-wrap">
            <h4 className="brief-text">
              DEVELOPING THE FUTURE OF RENEWABLE ENERGY BY HARNESSING THE HEAT
              FROM WITHIN THE EARTH’S CORE
            </h4>
            {/* <a href="/" className="text-btn">
              KNOW MORE{" "}
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6H21M21 6L16.102 1M21 6L16.102 11"
                  stroke="#77ABD2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a> */}
          </div>
        </Col>

        <Col lg="6">
          <div className="img-wrap">
            <img src={inside} alt="" className="brief-img" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Brief;
