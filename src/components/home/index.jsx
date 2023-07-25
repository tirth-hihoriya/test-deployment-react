import React, { useEffect } from 'react'
import Loader from '../layout/loader'
import About from './About'
import Banner from './Banner'
import Bottom from './Bottom'
import Brief from './Brief'
import Info from './Info'
import Insights from './Insights'
import Numbers from './Numbers'
import Plants from './Plants'
import Team from './Team'
import Aos from 'aos';

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Loader />
      <Banner />
      <div className="main-body">
        <About
          title="PIONEERING ALTERNATIVE RENEWABLE ENERGY​"
          desc="GreenAmmonia196 is trusted hydrogen energy company, offering full-cycle operations and delivering large-scale baseload power solutions on and off the grid, fueling the future with sustainable energy.​"
        />
        <div data-aos="fade-up" data-aos-duration="500">
          <Brief />
        </div>
        <Numbers />
        <Insights />
        <Team />
        <About
          title="Fueling a Sustainable Future with Hydrogen Energy Solutions."
          desc="At GreenAmmonia196, we are committed to driving a greener and more sustainable future through the power of hydrogen. As a leading player in the renewable energy sector, we strive to revolutionize the way we produce, store, and utilize energy, with a primary focus on hydrogen-based solutions. With the world facing pressing environmental challenges, our company is dedicated to harnessing the potential of hydrogen to propel us towards a cleaner and more resilient energy landscape."
        />
        <Plants />
        <Info />
      </div>
    </>
  );
}

export default Home
