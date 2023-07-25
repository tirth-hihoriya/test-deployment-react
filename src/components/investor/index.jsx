import React, { useState } from 'react'
import { Col, FormControl, FormLabel, Row } from 'react-bootstrap';
import InnerBanner from '../innerBanner';
import Loader from '../layout/loader';
import PageHeading from '../pageHeading';
import investorBanner from '../../assets/img/investorBanner.png';
import Swal from "sweetalert2";



const Investor = () => {
    const [data, setData] = useState({});
    const onChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      if(!data.firstName || !data.lastName || !data.email || !data.phone ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please enter mandatory field!",
        });
        return
      }
      try {
        let res = await fetch(
          "http://localhost:8080/user/investor",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        //   let resJson = await res.json();
        if (res.status) {
          document.getElementById("create-course-form").reset();
  
          Swal.fire({
            icon: "success",
            title: "Submitted",
            text: "All the details are collected. We will contact you soon.",
          });
          setData({});
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Some error occured. Please try again leter.",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <>
    <Loader />
        <InnerBanner title="INVESTOR" image={investorBanner}/>
        <PageHeading heading="Interested to know more about Geothermal Core, Inc. and our mission? Please let us know." />

        <div className="investor-form">
            <div className="form-wrap">
                <form onSubmit={handleSubmit} id="create-course-form">
                    <Row className='g-4'>
                        <Col md="6">
                            <FormLabel>First Name</FormLabel>
                            <FormControl placeholder='John' name="firstName"  onChange={onChange} required/>
                        </Col>

                        <Col md="6">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl placeholder='Doe' name="lastName" onChange={onChange} required/>
                        </Col>

                        <Col md="6">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type='email' placeholder='johndoe@email.com' onChange={onChange} name="email" required/>
                        </Col>

                        <Col md="6">
                            <FormLabel>Phone number</FormLabel>
                            <FormControl type='number' placeholder='000 000 0000' onChange={onChange} name="phone" required/>
                        </Col>

                        <Col md="12">
                            <FormLabel>Subject</FormLabel>
                            <FormControl placeholder='Enter your subject for the inquiry' onChange={onChange} name="subject"/>
                        </Col>

                        <Col md='12'>
                            <FormLabel>Message</FormLabel>
                            <FormControl as='textarea' placeholder='Type you message here' onChange={onChange} rows={6} name="message" />
                        </Col>

                        <Col md='12'>
                            <button type="submit" className='btn submit-btn'>Send Message</button>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    </>
  )
}

export default Investor;