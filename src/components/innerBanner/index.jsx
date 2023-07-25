import React from 'react'
import defaultBanner from '../../assets/img/greenHydroImages/inner-banner.png'

const InnerBanner = ({image = defaultBanner, title } )=> { 
  return (
    <div className='inner-banner ' style={{"backgroundImage":`url(${image})`}}>
      <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1100" className='w-100'>
        <h2 className="inner-banner-title"> {title} </h2>
      </div>
    </div>
  )
}

export default InnerBanner