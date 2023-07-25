import React from "react";
// import video from "../../assets/video/Geothermalcore.mp4";
import logo from "../../assets/img/logo-lg.png";
import BannerVideo from "./BannerVideo";
import ReactPlayer from "react-player";

const Banner = () => {
  return (
    <div className="banner-wrap">
      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1100"> */}
      <video
        src={
          "https://all-sites-under.s3.us-east-2.amazonaws.com/geothermal/geothermal-360-movies.mp4"
        }
        loop
        muted
        autoPlay
        className="banner-video"
      />
      {/* <ReactPlayer url="https://all-sites-under.s3.us-east-2.amazonaws.com/geothermal/Geothermalcore.mp4" /> */}
      {/* </div> */}

      {/* <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1200">
        <img src={banner} alt="" className="banner-svg" />
      </div> */}

      <div className="banner-content">
        <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1300">
          <img src={logo} alt="logo" className="banner-logo" />

          <p className="mb-5 text-center text-white fs-4 fw-normal">
            A Renewable E&P Power Company
          </p>
        </div>

        <div data-aos-duration="500" data-aos="fade-up" data-aos-delay="1400">
          <h3 className="banner-title text-white text-center">
            Developing Geothermal Power Across
          </h3>
          <h5 className="banner-text text-center">
            Texas, the United States, and Around the Globe
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
