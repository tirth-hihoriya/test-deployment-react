import React from 'react'

const Team = (props) => {
  return (
    <div>
      <div className="team-box">
        <div className="team-img">
            <img src={props.img} alt="" />
        </div>

        <div className="team-about">
            <h6 className="team-name"> {props.name} </h6>
            <p className="team-position"> {props.position} </p>
        </div>
      </div>
    </div>
  )
}

export default Team
