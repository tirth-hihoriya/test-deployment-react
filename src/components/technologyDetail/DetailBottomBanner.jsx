import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Aos from 'aos'

const DetailBottomBanner = props => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="detail-bottom-banner">
      <Row className="gy-4 justify-content-xl-end align-items-center">
        <Col xl="3">
          <div data-aos-duration="700" data-aos="fade-right">
            <h4 className="detail-banner-title">{props.title}</h4>
          </div>
        </Col>

        <Col md="6" xl="4">
          <div
            data-aos-duration="700"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {props.techBox1}
          </div>
        </Col>

        <Col md="6" xl="4">
          <div
            data-aos-duration="700"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {props.techBox2}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DetailBottomBanner
