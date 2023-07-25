import React from 'react'
import Devider from '../devider';
import InnerBanner from '../innerBanner';
import Loader from '../layout/loader';
import PageHeading from '../pageHeading';
import PrimaryBgHeading from '../primaryBgHeading';
import jay from '../../assets/img/team/jayy.png';
import andrew from '../../assets/img/team/Andrew.png';
import Bottom from '../home/Bottom';

const LeadingProgram = () => {
  return (
    <>
      <Loader />
      <InnerBanner title="LEADING PROGRAM" />
      <PageHeading
        heading="OUR FULL IMMERSION APPROACH EXTENDS OUR INVESTMENT EXPERTISE TO THE"
        align="text-start"
        text="development of our team"
      />

      <Devider />

      <div className="leader-content">
        <div data-aos-duration="700" data-aos="fade-up">
          <h5 className="leader-heading">
            FOSTERING THE GROWTH INFRASTRUCTURE TALENT OF TOMORROW
          </h5>
        </div>
        <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="200">
          <p className="leader-text">
            Developed in 2021, the Geothermal Core Leadership Program reflects
            our ethos of recruiting, mentoring, and training our junior
            investment team members to facilitate the next generation of energy
            investors. By exposing these rising stars to our full immersion
            strategy and teaching them about our solutions-driven approach, we
            are proud to build new leaders in our field and provide career
            pathways for young minds. Often, the pathway to employment is in the
            Geothermal Core portfolio, establishing both an exciting outcome for
            the team member and an extension of expert partnership to our
            portfolio.
          </p>
        </div>
      </div>

      <PrimaryBgHeading heading="Core AREAS OF ESG FOCUS" />

      <div className="leader-wrap">
        <div data-aos-duration="700" data-aos="fade-up">
          <div className="leader-card">
            <img src={jay} alt="" className="leader-img" />

            <div className="leader-content-wrap">
              <p className="leader-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                gravida cum sociis natoque penatibus et magnis dis parturient.
                Lectus nulla at volutpat diam ut venenatis tellus. Libero nunc
                consequat interdum varius sit amet. Lorem mollis aliquam ut
                porttitor leo a diam sollicitudin tempor. Urna et pharetra
                pharetra massa massa ultricies mi. Dolor magna eget est lorem
                ipsum dolor sit. Penatibus et magnis dis parturient montes
                nascetur. Quis ipsum suspendisse ultrices gravida dictum fusce.
                Donec pretium vulputate sapien nec sagittis aliquam. At ultrices
                mi tempus imperdiet nulla. Odio pellentesque diam volutpat
                commodo sed egestas egestas.Volutpat sed cras ornare arcu dui
                vivamus arcu felis. Quis enim lobortis scelerisque fermentum dui
                faucibus. Dictum at tempor commodo ullamcorper. Tincidunt nunc
                pulvinar sapien et ligula ullamcorper. Sed cras ornare arcu dui
                vivamus arcu felis.
              </p>

              <h5 className="leader-name">Dr. Jay Patel</h5>
              <p className="leader-position">CEO</p>
            </div>
          </div>
        </div>

        <div data-aos-duration="700" data-aos="fade-up">
          <div className="leader-card">
            <div className="leader-content-wrap">
              <p className="leader-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                gravida cum sociis natoque penatibus et magnis dis parturient.
                Lectus nulla at volutpat diam ut venenatis tellus. Libero nunc
                consequat interdum varius sit amet. Lorem mollis aliquam ut
                porttitor leo a diam sollicitudin tempor. Urna et pharetra
                pharetra massa massa ultricies mi. Dolor magna eget est lorem
                ipsum dolor sit. Penatibus et magnis dis parturient montes
                nascetur. Quis ipsum suspendisse ultrices gravida dictum fusce.
                Donec pretium vulputate sapien nec sagittis aliquam. At ultrices
                mi tempus imperdiet nulla. Odio pellentesque diam volutpat
                commodo sed egestas egestas.Volutpat sed cras ornare arcu dui
                vivamus arcu felis. Quis enim lobortis scelerisque fermentum dui
                faucibus. Dictum at tempor commodo ullamcorper. Tincidunt nunc
                pulvinar sapien et ligula ullamcorper. Sed cras ornare arcu dui
                vivamus arcu felis.
              </p>

              <h5 className="leader-name">Dr. Andrew Davidoff</h5>
              <p className="leader-position">FOUNDER & CTO</p>
            </div>

            <img src={andrew} alt="" className="leader-img" />
          </div>
        </div>
      </div>

      <Bottom />
    </>
  );
}

export default LeadingProgram;