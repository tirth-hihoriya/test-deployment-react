import React from 'react'

const IconBox = props => {
  return (
    <div className='esg-icon-wrap d-flex flex-column align-items-center'>
      <div className="esg-icon">
        <img src={props.icon} alt="" />
      </div>

      <p className="esg-icon-name"> {props.name} </p>
    </div>
  )
}

export default IconBox
