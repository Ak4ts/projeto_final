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
          Helloo
        </div>
      </div>
    </>
  )
}

export default Places;