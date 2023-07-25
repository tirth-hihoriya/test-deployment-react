import React from "react";
import TeamCard from "../team";
import t1 from "../../assets/img/team/Andrew.png";
import t2 from "../../assets/img/team/darrell.jpg";
import t3 from "../../assets/img/team/Doug.png";
import t4 from "../../assets/img/team/Frank.png";
import t5 from "../../assets/img/team/jayy.png";
import t6 from "../../assets/img/team/manish.png";
import t7 from "../../assets/img/team/michael.jpg";
import t8 from "../../assets/img/team/mike.jpg";
import t9 from "../../assets/img/team/Mohan.png";
import t10 from "../../assets/img/team/Shane.png";
import t11 from "../../assets/img/team/shannon.png";
import t12 from "../../assets/img/team/treyy.png";
import Slider from "react-slick";

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

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="team-section">
      <Slider {...settings}>
        <TeamCard img={t5} name="Dr. Jay Patel" position="CEO" />
        <TeamCard img={t7} name="Dr. Michael Shoemaker" position="COO" />
        <TeamCard img={t2} name="Darrell Gordon" position="CFO" />
        <TeamCard img={t8} name="Mike Fenton" position="Chief Engineer" />
        <TeamCard img={t10} name="Shane Quimby" position="Compliance Officer" />
        <TeamCard
          img={t1}
          name="Dr. Andrew Davidoff"
          position="Founder & CTO"
        />
        <TeamCard img={t3} name="Doug Campbell" position="Advisor" />
        <TeamCard
          img={t4}
          name="Frank Monachelli"
          position="Financial Advisor"
        />
        <TeamCard
          img={t12}
          name="Trey Storer"
          position="Business Development Advisor"
        />
        <TeamCard
          img={t6}
          name="Manish Mishra"
          position="Business Development Advisor"
        />
        {/* <TeamCard
          img={t11}
          name="Shannon Caraway"
          position="Business Development Advisor"
        /> */}
        <TeamCard
          img={t9}
          name="Mohan Anem"
          position="International Operations Advisor"
        />
        
      </Slider>

      <a href="/team" className="team-btn">
        MEET THE TEAM{" "}
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6H21M21 6L16.102 1M21 6L16.102 11"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default Team;
