import React from "react"
import "./style.css"
import Button from "@mui/material/Button";


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
        <Button className="like l" variant="contained"><i class="fas fa-heart"></i></Button>
        <Button className="like r" variant="contained"><i class="fas fa-bug"></i></Button>
      </div>
      </div>
    </div>
  )
}

export default Card;