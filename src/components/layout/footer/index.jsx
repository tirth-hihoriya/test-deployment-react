import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../assets/img/greenHydroImages/logo_white_text.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../../services/authService";
import Swal from "sweetalert2";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      email: email,
      status: true,
    };
    authService.addNewsLetter(data).then((res) => {
      console.log(res.data);
      if (res.data.messageCode === "200") {
        return Swal.fire({
          icon: "success",
          title: "success",
          text: "Email Added Successfully!",
        });
      }
      if (res.data.messageCode === "409") {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: `${res.data.content}`,
        });
      }
      if (res.data.messageCode === "400") {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some error occured. Please try again leter.",
        });
      }
    });
  };

  return (
    <div className="footer-wrap">
      <div className="footer-top d-md-flex align-items-center">
        {/* <a href="/" className="footer-logo">
  
            <img src={logo} alt="" />
  
          </a>
  
  
  
  
          <div className="footer-menu d-md-flex align-items-center">
  
            <a href="/" className="footer-link">
  
              HOME
  
            </a>
  
            <a href="/about-us" className="footer-link">
  
              About Us
  
            </a>
  
            <a href="/team" className="footer-link">
  
              Teams
  
            </a>
  
            <a href="/technology" className="footer-link">
  
              Technology
  
            </a>
  
           
  
  
  
  
          </div> */}

        <div className="row footerLink">
          <div className="col-xl-3 col-md-4 col-sm-12 col-12">
            <div className="footer-image">
              <a href="/" className="footer-logo">
                <img src={logo} alt="" />
              </a>
            </div>

            <div className="footer-text">
              <p>
               A trusted hydrogen energy company, offering full-cycle operations and delivering large-scale baseload power solutions on and off the grid, fueling the future with sustainable energy.
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-3 col-sm-12 col-12">
            <div className="header-name">
              <p>Company</p>
            </div>

            <div className="body-name">
              <p>
                <a href="/about-us">About us</a>
              </p>

              <p>
                <a href="/advancing">ESG</a>
              </p>

              <p>
                <a href="/our-portfolio">Projects</a>
              </p>

              <p>
                <a href="/advantages">Competitive Advantage</a>
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-3 col-sm-12 col-12">
            <div className="header-name">
              <p>Technology</p>
            </div>

            <div className="body-name">
              <p>
                <a href="/technology/orc">ORC Plant</a>
              </p>

              <p>
                <a href="/technology/scicat">Scicat Technology</a>
              </p>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 col-sm-12 col-12">
            <div className="header-name">
              <p>Other</p>
            </div>

            <div className="body-name">
              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("contact/us")}
                >
                  Contact Us
                </a>
              </p>

              <p>
                <a href="/investor">Investor</a>
              </p>

              <p>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("insights")}
                >
                  News & insights
                </a>
              </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-12 col-sm-12 col-12">
            <div className="header-name">
              <p>Newsletter</p>
            </div>

            <div>
              <div className="search-box">
                <input
                  onChange={(e) => handleChange(e)}
                  value={email}
                  type="text"
                  placeholder="Email address"
                />
                <div className="align-self-center">
                  <button onClick={() => handleSubmit()} type="submit">
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="copyright">
            © 2023 GreenAmmonia196. All Rights Reserved.
          </p>

          <div className="social-wrap">
            <a href="/terms-of-use" className="footer-link">
              Terms of use
            </a>

            <a href="/legal-disclaimer" className="footer-link">
              Legal Disclaimer
            </a>

            <a href="/privacy-policy" className="footer-link">
              Privacy Policy
            </a>

            <a href="/cookie-policy" className="footer-link">
              Cookie Policy
            </a>

            <a href="mailto:info@geothermalcore.com" className="social-link">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </a>

            <a
              href="https://www.linkedin.com/company/geothermal-core/people/"
              target="_blank"
              className="social-link"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="wrap">
          <div className="box_1">
            <h3>
              “In the boundless realm of hydrogen energy, we embrace the gift of nature's elemental abundance, fueling a sustainable legacy for generations to come.”
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
