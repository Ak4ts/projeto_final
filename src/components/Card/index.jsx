import React from "react"
import "./style.css"

function Card(props) {
  return (
    <div className="all">
      <div className="prof-pic">
        <img src={props.image} alt="profile picture" />
      </div>
      <div className="info">
      <span className="name">{props.name}, {props.age}</span>
      <span className="description">Description: {props.description}</span> 
      <span className="interests">Interests: {props.interests}</span> 
      <div className="btn">
        <button className="like l"><i class="fas fa-heart"></i></button>
        <button className="like r"><i class="fas fa-bug"></i></button>
      </div>
      </div>
    </div>
  )
}

export default Card;