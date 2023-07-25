import React from "react";

const PlantSlide = (props) => {
  return (
    <div>
      <div className="plant-slide">
        <div className="plant-about">
          <h2 className="plant-title">{props.title}</h2>
          <p className="plant-desc">{props.about}</p>
          <a href={props.link} className="text-btn">
            Know More{" "}
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H21M21 6L16.102 1M21 6L16.102 11"
                stroke="#77ABD2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className={`plant-img ${props.className}`}>
            <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PlantSlide;
