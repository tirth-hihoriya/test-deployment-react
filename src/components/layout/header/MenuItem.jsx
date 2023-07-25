import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='menu-item align-items-center'>
      <a href={props.link} className="menu-link">{props.name}</a>
    </div>
  )
}

export default MenuItem
