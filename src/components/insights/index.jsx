import React, { useState } from "react";
import InnerBanner from "../innerBanner";
import { Col, Row } from "react-bootstrap";
import PageHeading from "../pageHeading";
import rightBanner from "../../assets/img/imgOne.png";
import leftBanner from "../../assets/img/imgTwo.png";
import insightBanner from "../../assets/img/newsBanner.png";
import { useEffect } from "react";
import authService from "../services/authService";
import { formatDate } from "../admin/dashboard/commonUtil";

const Insights = () => {
  const [blog, setBlog] = useState([]);
  const [active, setActive] = useState(1);
  const [filterBlog, setFilterblog] = useState(blog);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllblog();
  }, []);

  const getAllblog = () => {
    authService.getBlog().then((res) => {
      if (res.data.messageCode == "200") {
        setBlog(res.data.content);
        setFilterblog(res.data.content);
      }
    });
  };

  let filterdBlog = [];

  const filterPortfolio = (val) => {
    setActive(val);
    filterdBlog = blog.filter((res) => {
      if (res.category === "Portfolio News") {
        return res;
      }
    });
    setFilterblog(filterdBlog);
  };

  const filterAll = (val) => {
    setActive(val);
    filterdBlog = blog.filter((res) => {
      if (res.category) {
        return res;
      }
    });
    setFilterblog(filterdBlog);
  };

  const filterPress = (val) => {
    setActive(val);
    filterdBlog = blog.filter((res) => {
      if (res.category === "Press Releases") {
        return res;
      }
    });
    setFilterblog(filterdBlog);
  };

  const filterMedia = (val) => {
    setActive(val);
    filterdBlog = blog.filter((res) => {
      if (res.category === "Media") {
        return res;
      }
    });
    setFilterblog(filterdBlog);
  };

  const numberOfLine = (content) => {
    if (content.length >= 300) {
      return `${content.slice(0, 300)}...`;
    }
  };
  const numberOfLineHeading = (title) => {
    if (title.length >= 15) {
      return `${title.slice(0, 30)}...`;
    }
  };

  return (
    <>
      <InnerBanner title="NEWS &amp; INSIGHTS" image={insightBanner} />
      <div className="news">
        <div className="news-filter-bar d-md-flex aling-items-center">
          <div className="filter-item">
            <p className="filter-title ">Filters</p>
          </div>
          <div className="filter-item align-self-center">
            <button
              onClick={() => filterAll(1)}
              className={
                active === 1
                  ? "btn btn-success btn-lg rounded-0"
                  : "btn btn-outline-success btn-lg rounded-0"
              }
            >
              All
            </button>
          </div>
          <div className="filter-item ps-2 align-self-center">
            <button
              onClick={() => filterPortfolio(2)}
              className={
                active === 2
                  ? "btn btn-success btn-lg rounded-0"
                  : "btn btn-outline-success btn-lg rounded-0"
              }
            >
              Portfolio News
            </button>
          </div>
          <div className="filter-item ps-2 align-self-center">
            <button
              onClick={() => filterPress(3)}
              className={
                active === 3
                  ? "btn btn-success btn-lg rounded-0"
                  : "btn btn-outline-success btn-lg rounded-0"
              }
            >
              Press Releases
            </button>
          </div>
          <div className="filter-item ps-2 align-self-center">
            <button
              onClick={() => filterMedia(4)}
              className={
                active === 4
                  ? "btn btn-success btn-lg rounded-0"
                  : "btn btn-outline-success btn-lg rounded-0"
              }
            >
              Media
            </button>
          </div>
        </div>
        <div className="">
          <div className="row body_insights">
            {filterBlog.map((item) => (
              <div key={item._id} className="col-xl-6 col-sm-12 col-12 mt-5">
                <div
                  className="news-grid"
                  data-aos-duration="700"
                  data-aos="fade-up"
                >
                  <div data-aos-duration="700" data-aos="fade-up">
                    <div className="news-banner">
                      <img className="img" src={item.img_link} alt="" />
                    </div>
                  </div>
                  <div data-aos-duration="700" data-aos="fade-left">
                    <div className="insights_details">
                      <span>
                        {formatDate(item.createdAt)} | EOTHERMAL CORE MEDIA
                      </span>
                      <h3>{numberOfLineHeading(item.title)}</h3>
                      <p>{numberOfLine(item.content)}</p>
                      <span
                        onClick={() =>
                          window.open(
                            item.external_link,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        {" "}
                        Know More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
