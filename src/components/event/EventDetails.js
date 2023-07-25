import React, { useEffect, useState } from "react";
import InnerBanner from "../innerBanner";
import { Col, Row } from "react-bootstrap";
import PageHeading from "../pageHeading";
import { useLocation } from "react-router-dom";
import logo from "../../assets/img/greenHydroImages/logo.svg";
import lctlogo from "../../assets/img/lct-logo.png";
import tech196logo from "../../assets/img/tech196-logo.png";
import remplogo from "../../assets/img/remp-logo.png";
import gtlogo from "../../assets/img/gt-logo.png";
import generationlogo from "../../assets/img/generation-logo.png";
import telogo from "../../assets/img/te-logo.png";
import eventdetail from "../../assets/img/eventdetail.png";
import jaypatel from "../../assets/img/team/jayy.png";
import contact1 from "../../assets/img/team/contact1.png";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const Event = () => {
  const search = useLocation().pathname;
  const ids = search.split("/");
  const _id = ids[ids.length - 1];
  const [eventSingle, setEventData] = useState();
  const getEvent = async () => {
    const headerToken = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_BACKEND}api/event/${_id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${headerToken}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        if (data.messageCode === "200") {
          setEventData(data.content);
        }
      })
    );
  };
  useEffect(() => {
    getEvent();
    window.scrollTo(0, 0);
  }, []);

  const {
    contactData: { images: contactData } = {},
    eventData: {
      title,
      event_date,
      event_time,
      city,
      address,
      state,
      country,
      description1,
      description2,
      thumbnail,
    } = {},
    keyNoteData: { images } = {},
    partnertData: { images: parnerData } = {},
    programData = {},
  } = eventSingle || {};
  return (
    <div className="eventWrapper eventDetailsWrapper">
      <div className="bannerEvent">
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="" className="logo-img" />
                </a>
              </div>
              <h2>{title}</h2>
              <div className="register">
                <Link>REGISTER FOR FREE </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-card">
                <p>DATE</p>
                <h3>{event_date} </h3>
                <p>TIMING</p>
                <h3>{event_time}</h3>
                <p>LOCATION</p>
                <h3 className="location">
                  {address}
                  <br />
                  {city}, {state}, {country}
                  <br />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <br />
        <h2 className="title">INTRODUCTION TO EVENT</h2>
        <div className="row">
          <div className="col-md-8 mt-4">
            <p className="content">{description1}</p>
          </div>
          <div className="col-md-4">
            <img src={thumbnail} alt="event4" className="img-fluid" />
          </div>
          <div className="col-md-12 mt-4">
            <p className="content">{description2}</p>
          </div>

          <div className="col-md-8 mt-4">
            <h2 className="title">KEYNOTE SPEAKERS</h2>
            <div className="row mt-2 keyspeaker">
              {images &&
                images.length &&
                images.map((item, index) => (
                  <div className="col-md-4">
                    <img
                      src={item.filename}
                      alt="event4"
                      className="img-fluid"
                    />
                    <p>
                      {item.name}
                      <br /> <span>{item.designation}</span>
                    </p>
                  </div>
                ))}
            </div>
            <div className="primary-bg-heading">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                className="aos-init aos-animate"
              >
                <div className="primary-bg">
                  <h4 className="bg-heading">Preliminary Program</h4>
                </div>
              </div>
            </div>

            <Accordion>
              {programData &&
                programData.length &&
                programData.map((item, index) => (
                  <Accordion.Item eventKey={index}>
                    <Accordion.Header>
                      {item.program_time}- SESSION 0{index + 1}
                    </Accordion.Header>
                    <Accordion.Body>{item.details}</Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div className="col-md-4 mt-4">
            <div className="image-card">
              <p className="image-title">MODERATOR</p>
              {contactData && contactData.length && (
                <>
                  <img
                    src={contactData[0].filename}
                    alt="event4"
                    className="img-fluid"
                  />
                  <p className="image-title">{contactData[0].name}</p>
                  <p className="desigination">{contactData[0].designation} </p>
                </>
              )}
            </div>

            <div className="image-card image-card-2">
              <p className="image-title">Contact</p>
              <br />
              {contactData &&
                contactData.length &&
                contactData.map((item, index) => {
                  if (!index) {
                    return;
                  }
                  return (
                    <>
                      <div className="contact flex">
                        <img
                          src={item.filename}
                          alt="event4"
                          className="img-fluid"
                          width="100px"
                        />
                        <div className="contact-details">
                          <p className="image-title">{item.name}</p>
                          <p className="desigination">{item.designation}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>

          <div className="col-md-12 partner">
            <h2 className="title">PARTNER NETWORK</h2>
            <div className="row">
              {parnerData &&
                parnerData.length &&
                parnerData.map((item, index) => (
                  <div className="col-3">
                    <img
                      src={item.filename}
                      alt="event4"
                      className="img-fluid"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
