import React from "react";
import './style.css'
import Header from "../../components/header";
import luis from "../../img/luis.png"
import andre from "../../img/andre.png"
import felipe from "../../img/felipe.png"
function Cards() {
  return (
    <>
      <div className="left">Menu</div>
      <div className="right">
      
          <div className="overlay friendo-profile-title">      
          <h1 data-text="Friend">Friendo</h1>
          </div>
          <div className="cards">
            <h1 className="card-title">Cards</h1>
            <div className="card l">Card1</div>
            <div className="card r">Card2</div>
            <div className="card l">Card1</div>
            <div className="card r">Card2</div>
            <div className="card l">Card1</div>
            <div className="card r">Card2</div>
          </div>
          
        </div>
      
  </>
  
 
  )
}

export default Cards;