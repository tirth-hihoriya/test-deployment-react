import React from "react";
import Slider from "react-slick";
import PlantSlide from "../plantSlide";
import dry from '../../assets/img/dryplant.png';
import flash from '../../assets/img/flashsteam.png'
import binary from '../../assets/img/binaryplant.png'

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="14"
        height="26"
        viewBox="0 0 14 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L13 13L1 25"
          stroke="#77ABD2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="14"
        height="26"
        viewBox="0 0 14 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 25L1 13L13 0.999999"
          stroke="#77ABD2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

const Plants = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="plant-section">
      <Slider {...settings}>
        <div className="plant-slide-wrap">
          <PlantSlide
            title="ORGANIC RANKINE CYCLE (ORC) PLANT"
            about="Geothermal Core uses state-of-the-art compact Organic Rankine Cycle (ORC) geothermal power plants that optimize low-temperature geothermal resources for maximum power production and 98% uptime efficiency. "
            img={dry}
            link="/technology/orc-plant"
          />
        </div>
        <div className="plant-slide-wrap">
          <PlantSlide
            title="SciCat technology"
            about="SciCat technology power plants transfer the heat from geothermal hot water to another liquid. "
            img={binary}
            link="/technology/binary-plant"
            className="mt-125"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Plants;
