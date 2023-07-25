import React from "react";
import shape from '../../assets/img/card-shape.png'

const BottomCard = ({title, link=""}) => {
  return (
    <a href={link} className="bottom-card">
        <img src={shape} alt="" className="card-shape" />

      <h6 className="card-text">{title}</h6>

      <a href={link} target="_blank" className="icon-btn">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0718 24.0002L26.9282 16.0002M26.9282 16.0002L21.5348 14.4953M26.9282 16.0002L25.5348 21.4235"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="20" cy="20" r="19.5" stroke="white" />
        </svg>
      </a>
    </a>
  );
};

export default BottomCard;
