import React from 'react'

const PageHeading = props => {
  return (
    <div className={`page-heading-wrap ${props.className}`}>
      <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1300">
        <h4 className={`page-heading ${props.align}`}>{props.heading} <span className="text-secondary">{props.text}</span> </h4>
        </div>
    </div>
  )
}

PageHeading.defaultProps = {
    align: 'text-center'
}

export default PageHeading
