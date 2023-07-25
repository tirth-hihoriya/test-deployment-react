import React from "react";

const TechnologyBox = (props) => {
  return (
    <div className="techno-box">
      <img src={props.img} alt="" className={`techno-img ${props.show}`} />

      <div className="techno-content-wrap d-flex flex-column justify-content-between">
        <a href={props.link} className="techno-icon-btn"></a>

        <div className="techno-content">
          <h5 className="techno-title">{props.title}</h5>
          <p className="techno-desc">{props.desc}</p>

          <a href={props.link} className="text-btn">
            Know More{" "}
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4H13M13 4L10.0612 1M13 4L10.0612 7"
                stroke="#77ABD2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

TechnologyBox.defaultProps = {
  show: "d-none"
}

export default TechnologyBox;
