import React, { useState } from "react";
import InnerBanner from "../innerBanner";
import ContactDetail from "./ContactDetail";
import Loader from "../layout/loader";
import contactBanner from "../../assets/img/greenHydroImages/contactusBanner.png";
import { Col, FormControl, FormLabel, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Contact = () => {
  const [data, setData] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

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
    try {
      let res = await fetch("http://localhost:8080/user/investor", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
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
      <InnerBanner title="CONTACT US" image={contactBanner} />

      <div className="contact-wrap hidden">
        <Row className="justify-content-between">
          <Col lg="5">
            <div className="contact-info-wrap">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <div className="contact-detail-wrap">
                  <div className="detail-title-wrap">
                    <p>Contact us</p>
                  </div>

                  <div className="contact-info">
                    <p className="contact-info-title">Address</p>
                    <p className="contact-detail">
                      2150 TOWN SQUARE PLAZA <br /> SUITE 200 <br /> SUGAR LAND,
                      TX 77479 <br /> U.S.A
                    </p>
                  </div>

                  <ContactDetail
                    title="Email"
                    displayDetail="d-none"
                    display="d-block"
                    link="info@geothermalcore.com"
                  />
                </div>
              </div>

              <div data-aos-duration="700" data-aos="fade-up">
                <div className="contact-detail-wrap">
                  <div className="detail-title-wrap">
                    <p>Contact investor relations</p>
                  </div>

                  <div className="invst-wrap">
                    <p className="invstr-name">Dr. Jay Patel</p>
                    <p className="invstr-position">Chairman & CEO</p>
                    <a
                      href="mailto:jay@geothermalcore.com"
                      className="contact-link"
                    >
                      jay@geothermalcore.com
                    </a>
                  </div>

                  <div className="invst-wrap">
                    <p className="invstr-name">Dr. Michael Shoemaker</p>
                    <p className="invstr-position">COO</p>
                    <a
                      href="mailto:mshoemaker@geothermalcore.com"
                      className="contact-link"
                    >
                      mshoemaker@geothermalcore.com
                    </a>
                  </div>

                  <div className="invst-wrap">
                    <p className="invstr-name">Dr. Andrew Davidoff</p>
                    <p className="invstr-position">CTO</p>
                    <a
                      href="mailto:adavidoff@geothermalcore.com"
                      className="contact-link"
                    >
                      adavidoff@geothermalcore.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="7" xxl="6">
            <div
              data-aos-duration="700"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="media-inq-wrap">
                <div className="media-inq">
                  <div className="detail-title-wrap">
                    <h4>For media inquiries</h4>
                  </div>

                  <div className="inq-member">
                    <p className="inq-name">Shane Quimby</p>
                    <p className="inq-position">
                      Head of Communications & Public Affairs
                    </p>
                  </div>

                  <div className="inq-info-wrap">
                    <div className="inq-info">
                      <p>Phone</p>
                      <p>832-493-8172</p>
                    </div>

                    <div className="inq-info">
                      <p>Email</p>
                      <a href="mailto:squimby@geothermalcore.com">
                        squimby@geothermalcore.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="justify-content-between">
        <Col md="12">
          <div className="investor-form">
            <h3>Contact Us</h3>
            <p>
              If you wish to contact us please fill out this form or call us at{" "}
              <a href="tel:+1 832 722 5020">+1 832 722 5020</a>
            </p>
            <br />
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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                        required
                      />
                      <label className="form-check-label">
                        I accept the{" "}
                        <a href="/privacy-policy" target="_blank">
                          {" "}
                          privacy policy{" "}
                        </a>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                        required
                      />
                      <label className="form-check-label">
                        I accept to receive communication from Geothermal core
                      </label>
                    </div>
                  </Col>

                  <Col md="12">
                    <button type="submit" className="btn submit-btn">
                      Send Mmessage
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-between contact">
        <Col md="4">
          <div className="card">
            <p className="title">CONTACT US</p>
            <div className="flex mt-20">
              <div className="address">Address</div>
              <div>
                <p>2150 TOWN SQUARE <br/>PLAZASUITE 200SUGAR <br/>LAND, TX 77479<br/> U.S.A</p>
              </div>
            </div>
            <div className="flex mt-20">
              <div className="address">Email</div>
              <div>
                <p>info@geothermalcore.com</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="card">
            <p className="title">CONTACT INVESTOR RELATIONS</p>
            <br/>
            <p>Dr. Jay Patel</p>
            <p className="address">Chairman & CEO</p>
            <p>jay@geothermalcore.com</p>
            <br/>
            <p>Dr. Michael Shoemaker</p>
            <p className="address">COO</p>
            <p>mshoemaker@geothermalcore.com</p>
            <br/>
            <p>Dr. Andrew Davidoff</p>
            <p className="address">CTO</p>
            <p>adavidoff@geothermalcore.com</p>
           
          </div>
        </Col>
        <Col md="4">
          <div className="card">
            <p className="title">for media inquiry</p>
            <br/>
            <p>Shane Quimby</p>
            <p className="address">Head of Communications & Public Affairs</p>
            <div className="flex mt-20">
              <div className="address">Phone</div>
              <div>
                <p>832-493-8172</p>
              </div>
            </div>
            <div className="flex mt-20">
              <div className="address">Email</div>
              <div>
                <p>squimby@geothermalcore.com</p>
              </div>
            </div>
            
           
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
