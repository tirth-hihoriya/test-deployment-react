import React, { useEffect } from 'react'
import NumberCard from '../numberCard'
import Aos from 'aos'

const Numbers = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <section className="number-section">
      <div data-aos-duration="500" data-aos="fade-right">
        <NumberCard
          number="Over 30"
          text="Years"
          title="GEOTHERMAL PLANT LIFE TIME"
        />
      </div>

      <div data-aos-duration="500" data-aos="fade-right">
        <NumberCard number="24/7 " text="Baseload Power" title="Dispatchable" />
      </div>

      <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="100">
        <NumberCard number="1% " text="Solar​" title="Surface Footprint​" />
      </div>

      <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="200">
        <NumberCard number="98%​" title="Plant Run Time​" />
      </div>

      <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="300">
        <NumberCard number="~$.03​" title="Levelized Cost of Energy (LCOE)​" />
      </div>

      <div data-aos-duration="500" data-aos="fade-right" data-aos-delay="400">
        <NumberCard
          number="1&#8451;"
          text="/ decade"
          title="Energy Decline Rate​"
        />
      </div>
    </section>
  );
}

export default Numbers
