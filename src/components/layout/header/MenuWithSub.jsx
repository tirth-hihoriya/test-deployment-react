import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuWithSub = (props) => {
  return (
    <div className='dropdown-wrap align-items-center'>
      <div className="submenu-wrap">
        <Link to={props.link} className="has-sub"> {props.name} <FontAwesomeIcon icon={faAngleDown} className='sub-icon' /> </Link>

        <div className="sub-wrap">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MenuWithSub
