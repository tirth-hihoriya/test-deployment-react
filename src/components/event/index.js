import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InnerBanner from "../innerBanner";
import event1 from "../../assets/img/event1.png";
import event2 from "../../assets/img/event2.png";
import event3 from "../../assets/img/event3.png";
import event4 from "../../assets/img/event4.png";

const Event = () => {
  const [listData, setListData] = useState([]),
    getList = async () => {
      const headerToken = localStorage.getItem("token");
      fetch(`${process.env.REACT_APP_BACKEND}api/image`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${headerToken}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          console.log("res", data);

          if (data.messageCode === "200") {
            setListData(data.content);
          }
        })
      );
    };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="eventWrapper">
      <InnerBanner title="Event" />
      <div className="">
        <div className="primary-bg-heading">
          <div
            data-aos-duration="700"
            data-aos="fade-up"
            className="aos-init aos-animate"
          >
            <div className="primary-bg">
              <h4 className="bg-heading">AGENDA</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <li>India’s Energy Transition – Markets and Opportunities</li>
            <li>Domestic Manufacturing – Strengthening Local Supply Chains</li>
            <li>Changing Landscape of Renewable Projects</li>
            <li>Technology Trends Driving the Renewables Market</li>
            <li>
              Green Hydrogen – The Critical Piece in the Decarbonization Puzzle
            </li>
            <li>Technology Spotlight – Start-up Pitch Session</li>
            <li>Role of Energy Storage in Making Renewables Mainstream</li>
            <li>
              Corporates and Industries Leading Decarbonization and Renewables
              Adoption
            </li>
            <li>Financing Renewables – Where is the money coming from?</li>
          </div>
          <div className="col-md-4">
            <img src={event1} alt="event1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="primary-bg-heading">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                className="aos-init aos-animate"
              >
                <div className="primary-bg">
                  <h4 className="bg-heading">Purpose</h4>
                </div>
              </div>
            </div>
            <p className="content">
            Your Catalyst for a Greener Future! Discover innovative hydrogen solutions that drive sustainable energy transition and pave the way towards a cleaner, more resilient world. Join us in embracing the hydrogen revolution today!
            </p>
          </div>
          <div className="col-md-6">
            <div className="primary-bg-heading">
              <div
                data-aos-duration="700"
                data-aos="fade-up"
                className="aos-init aos-animate"
              >
                <div className="primary-bg">
                  <h4 className="bg-heading">Measurable Outcome</h4>
                </div>
              </div>
            </div>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              facilisis magna etiam tempor orci eu. Dui id ornare arcu odio ut
              sem. Dictumst vestibulum rhoncus est pellentesque elit. Ornare
              arcu odio ut sem. Fermentum et sollicitudin ac orci phasellus.
              Nunc congue nisi vitae suscipit. Rhoncus urna neque viverra justo
              nec. Fermentum iaculis eu non diam. Pellentesque habitant morbi
              tristique senectus et.
            </p>
          </div>
          <div className="col-md-12">
            <h2 className="text-center title">Upcoming Events</h2>
          </div>
        </div>
      </div>

      <div className="news">
        <div className="news-filter-bar">
          <p className="filter-title">Filter:</p>
          <div className="btn-wrap d-flex aling-items-center">
            <button className="btn filter-btn active">All</button>
            <button className="btn filter-btn">Upcoming Events</button>
            <button className="btn filter-btn">Events completed</button>
          </div>
        </div>
      </div>
      <div className=" blog">
        <div className="row">
          {listData.map((item, index) => {
            const {
              event_details: {
                _id,
                country,
                state,
                city,
                event_date,
                event_time,
                description1,
                createdAt,
                title,
                thumbnail,
              } = {},
            } = item;
            return (
              <div className="col-md-3">
                <Link to={`/event/details/${_id}`}>
                  <div className="blog-card">
                    <img src={thumbnail} alt="event2" className="img-fluid" />
                    <p className="place">
                      {city}, {state}
                    </p>
                    <p className="blog-title">{title}</p>
                    <p className="date">
                      {event_date} <span>{event_time}</span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Event;
