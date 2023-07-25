import React, { useState, useEffect } from "react";
import InnerBanner from "../innerBanner";
// import ContactDetail from "./ContactDetail";
import Loader from "../layout/loader";
import contactBanner from "../../assets/img/greenHydroImages/contactusBanner.png";
import { Col, FormControl, FormLabel, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import authService from "../services/authService";

const ContactUs = () => {
  const [data, setData] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter mandatory field!",
      });
      return;
    }
    let dataDetails = {
      firstName: data.firstName,
      lasttName: data.lastName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    try {
      await authService.contactDetails(dataDetails).then((res) => {
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
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Loader />
      <InnerBanner title="CONTACT US" image={contactBanner} />
      <div className="">
        {/* <div className="container_inner"> */}
        <div className="contact-form">
          <div className="row">
            <div className="col-xl-5 col-sm-12 col-12 address_info_heading">
              <div className="contact_heading">
                <h3>Contact Information</h3>
              </div>
              <div className="contact_address">
                <h5>Address</h5>
                <p>
                  2150 Town Square Place, Suite 200, Sugar Land, Texas 77479
                </p>
              </div>
              <div className="contact_email">
                <h5>Email</h5>
                <p>info@geothermalcore.com</p>
              </div>
              <div className="contact_Investors">
                <h3>Contact Investor Relation</h3>
              </div>
              <div className="contact_Investors_details">
                <h5>Dr. Jay Patel</h5>
                <p>Chairman & CEO</p>
                <p>jay@geothermalcore.com</p>
                <h5>Dr. Michael Shoemaker</h5>
                <p>COO</p>
                <p>mshoemaker@geothermalcore.com</p>
              </div>
            </div>

            {/* <div className="col-1"></div> */}
            <div className="col-xl-7 col-sm-12 col-12 p-0 p-xl-3 mt-xl-0 mt-4">
              <div className="contact-field">
                <div className="row">
                  <div className="conatct-form-sumbit">
                    <h3>Get in touch with us</h3>
                    <div className="form-wrap">
                      <form onSubmit={handleSubmit} id="create-course-form">
                        <Row className="g-4">
                          <Col md="6">
                            <FormLabel>First Name</FormLabel>
                            <FormControl
                              placeholder="John"
                              name="firstName"
                              onChange={onChange}
                              required
                            />
                          </Col>

                          <Col md="6">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl
                              placeholder="Doe"
                              name="lastName"
                              onChange={onChange}
                              required
                            />
                          </Col>

                          <Col md="6">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl
                              type="email"
                              placeholder="johndoe@email.com"
                              onChange={onChange}
                              name="email"
                              required
                            />
                          </Col>

                          <Col md="6">
                            <FormLabel>Phone number</FormLabel>
                            <FormControl
                              type="number"
                              placeholder="000 000 0000"
                              onChange={onChange}
                              name="phone"
                              required
                            />
                          </Col>

                          <Col md="12">
                            <FormLabel>Subject</FormLabel>
                            <FormControl
                              placeholder="Enter your subject for the inquiry"
                              onChange={onChange}
                              name="subject"
                            />
                          </Col>

                          <Col md="12">
                            <FormLabel>Message</FormLabel>
                            <FormControl
                              as="textarea"
                              placeholder="Type you message here"
                              onChange={onChange}
                              rows={6}
                              name="message"
                            />
                          </Col>
                          <Col md="12">
                            <button type="submit" className="btn submit-btn">
                              Submit
                            </button>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="media-contact">
              <div className="row">
                <div className="col-xl-3 col-md-12 col-sm-12 col-12">
                  <div className="media-heading">
                    <h3>For Media Inquiry</h3>
                  </div>
                </div>
                <div className="col-xl-9 col-md-12 col-sm-12 col-12">
                  <div className="row media-contact-details">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                      <h3>Shane Quimby</h3>
                      <p>Head of Communications & Public Affairs</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 media-head-subtitle">
                      <h3>Phone</h3>
                      <p>832-493-8172</p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 media-head-subtitle">
                      <h3>Email</h3>
                      <p>squimby@geothermalcore.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ContactUs;
