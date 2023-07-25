import React from 'react'
import bg from '../../assets/img/card-bg.png'

const NumberCard = (props) => {
  return (
    <div className="number-card">
      <div className="number-box">
        <div className="number-bg">
          <img src={bg} alt="" />
        </div>
        <div>
          <p className="number text-center text-capitalize"> {props.number} </p>
          <p className="small-text text-center"> {props.text} </p>
        </div>
      </div>

      <p className="number-text text-center"> {props.title} </p>
    </div>
  );
}

export default NumberCard
