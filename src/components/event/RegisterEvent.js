import React from 'react'
import { Col, FormControl, FormLabel, Row } from 'react-bootstrap';
import InnerBanner from '../innerBanner';
import Loader from '../layout/loader';
import PageHeading from '../pageHeading';

const RegisterEvent = () => {
  return (
    <div className="registerEvent">
         <>
    <Loader />
        <PageHeading heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <div className="investor-form">
            <div className="form-wrap">
                <form action="">
                    <Row className='g-4'>
                        <Col md="6">
                            <FormLabel>First Name</FormLabel>
                            <FormControl placeholder='John' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl placeholder='Doe' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type='email' placeholder='johndoe@email.com' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Phone number</FormLabel>
                            <FormControl type='number' placeholder='000 000 0000' />
                        </Col>
                        <Col md="6">
                            <FormLabel>Company Name</FormLabel>
                            <FormControl type='text' placeholder='Company Name' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Job Title</FormLabel>
                            <FormControl type='text' placeholder='Job Title' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Job Foundation</FormLabel>
                            <FormControl type='text' placeholder='Job Foundation' />
                        </Col>

                        <Col md="6">
                            <FormLabel>Industry</FormLabel>
                            <FormControl type='number' placeholder='Industry' />
                        </Col>
                        <Col md="6">
                            <FormLabel>Country</FormLabel>
                            <FormControl type='text' placeholder='Country' />
                        </Col>

                        <Col md="6">
                            <FormLabel>City</FormLabel>
                            <FormControl type='text' placeholder='Citys' />
</Col>
                        <Col md='12'>
                            <button type="submit" className='btn submit-btn'>Submit</button>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    </>

    </div>
  );
};

export default RegisterEvent;
