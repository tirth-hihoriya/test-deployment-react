import React, { useEffect } from 'react'
import icon from '../../assets/img/greenHydroImages/logo-icon.svg'
import Aos from 'aos';

const About = (props) => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <section className='about-section'>
      <div data-aos="fade-up" data-aos-duration="500">
        <div className="about-wrap">
              <img src={icon} alt="logo" className='logo-icon' />

              <div className="about-content">
                  <h4 className="about-title"> {props.title} </h4>
                  <p className="about-desc"> {props.desc} </p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default About
