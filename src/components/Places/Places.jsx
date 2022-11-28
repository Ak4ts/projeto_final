import React from "react";
import "./Places.css"

function Places(props) {
  return (
    <>
      <div className="place">
        <div className="place-img">
          <img src={props.image} alt="place" />
        </div>
        <div className="place-desc">
          <h2>{props.place}</h2>
          <p>{props.description}</p>
          <div className="place-btns">
          <a href={props.location} target="_blank" rel="noopener noreferrer"><button><i className="fas fa-map-marked-alt"></i> Find one near you</button></a>
          <a href="/cards"><button><i className="fas fa-user-friends"></i> Invite a friend</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Places;