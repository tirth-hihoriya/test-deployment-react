import React from 'react'
import PropTypes from 'prop-types'

const ContactDetail = props => {
  return (
    <div className='contact-info'>
      <p className="contact-info-title">{props.title}</p>
      <p className={`contact-detail ${props.displayDetail}`}>{props.detail}</p>
      <a href={`mailto:${props.link}`} className={`contact-link ${props.display}`}>{props.link}</a>
    </div>
  )
}

ContactDetail.defaultProps = {
    display: "d-none",
    displayDetail: "d-block"
}

export default ContactDetail
