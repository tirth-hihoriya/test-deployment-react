import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BottomCard from '../bottomCard'

const Bottom = ({className}) => {
  return (
    <section className={`bottom-section ${className}`}>
      {/* <Row className='gy-4'>
        <Col md='4'>
          <div data-aos-duration="500" data-aos="fade-right">
            <BottomCard title="News & Insights" />
          </div>
        </Col>

        <Col md='4'>
          <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="200">
            <BottomCard title="Contact Us" />
          </div>
        </Col>

        <Col md='4'>
          <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="400">
            <BottomCard title="Investor Login" />
          </div>
        </Col>
      </Row> */}
    </section>
  )
}

export default Bottom
