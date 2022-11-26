import React from "react";
import './style.css'

function Cards() {
  return (
    <>
      <div className="left">
        <ul>
          <li><a href="/"><i className="fas fa-home"></i></a></li>
          <li><a href="/settings"><i className="fas fa-cogs"></i></a></li>
          <li><a href="/profile"><i className="fas fa-user-circle"></i></a></li>
          <li><a href="/chat"><i className='far fa-comment-dots'></i></a></li>
          <li><a href="/cards"><i className="fas fa-heart"></i></a></li>
        </ul>
      </div>
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