import React from "react";
import './style.css'
import Card from "../../components/Card";
import luis from "../../img/luis.png"
import andre from "../../img/andre.png"
import coffee from "../../img/cafe.jpg"
import felipe from "../../img/felipe.png"
import maria from "../../img/friends.jpg"
import friendos from "../../img/friendos.jpeg"
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
          <h1 className="card-title">Meet new people!</h1>
          <div className="cards">
            <Card image={luis} name="Luis Gabriel" age='14' description= "I like going places and  meeting new people!" interests="Surfing, Skiing, Golfing, Surfing, Skiing, Golfing, Surfing, Skiing, Golfing,Surfing, Skiing, Golfing,Surfing, Skiing, Golfing" />
            <Card image={andre} name="Andre" age='53' description= "I like going places and  meeting new people!" interests="Surfing, Skiing, Golfing, Surfing, Skiing, Golfing, Surfing, Skiing, Golfing,Surfing, Skiing, Golfing,Surfing, Skiing, Golfing"/>
            <Card image={felipe} name="Felipe" age='17' description= "I like going places and  meeting new people!" interests="Gaming, watching movies and listening to music"/>
            <Card image={friendos} name="João Gabriel" age='12' description= "I like going places and  meeting new people!" interests="Surfing, Skiing, Golfing, Surfing, Skiing, Golfing, Surfing, Skiing, Golfing,Surfing, Skiing, Golfing,Surfing, Skiing, Golfing"/>
            <Card image={maria} name="Maria" age='19' description= "I like going places and  meeting new people!" interests="Surfing, Skiing, Golfing, Surfing, Skiing, Golfing, Surfing, Skiing, Golfing,Surfing, Skiing, Golfing,Surfing, Skiing, Golfing"/>
            <Card image={coffee} name="Anna" age='25' description= "I like going places and meeting new people!" interests="Astrology, coffee"/>
          </div>
          
        </div>
      
  </>
  
 
  )
}

export default Cards;