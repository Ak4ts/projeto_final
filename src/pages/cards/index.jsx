import React from "react";
import './style.css'
import Card from "../../components/Card";
import luis from "../../img/luis.png"
import andre from "../../img/andre.png"
import coffee from "../../img/cafe.jpg"
import felipe from "../../img/felipe.png"
import maria from "../../img/friends.jpg"
import friendos from "../../img/friendos.jpeg"
import luid from "../../img/luid.jpeg"
import gabriel from "../../img/gabs.jpeg"
import john from "../../img/guy1.jpg"
import juliana from "../../img/woman1.jpg"
import Header from "../../components/Header/Header";
function Cards() {
  return (
    <>
      <div className="left">
        <Header/>
      </div>
      <div className="right">
      
          <div className="overlay friendo-profile-title">      
          <h1 data-text="Friend">Friendo</h1>
          </div>
          <h1 className="card-title">Meet new people!</h1>
          <div className="cards">
            <Card image={luis} name="Luis Gabriel" age='14' description= "Love animals and plants. hate ugly people. Love u" interests="Plants, animals and astrology" />
            <Card image={andre} name="Andre" age='53' description= "giga chad 🗿🌿 guitarrista 🎸emo 💀 🖤 " interests="Rock e Emos"/>
            <Card image={felipe} name="Felipe" age='47' description= "I like going places and  meeting new people!" interests="Gaming, watching movies and listening to music"/>
            <Card image={friendos} name="João Gabriel" age='22' description= "I like going places and  meeting new people!" interests="Surfing"/>
            <Card image={maria} name="Maria" age='19' description= "I like going places and  meeting new people!" interests="Books, mountains"/>
            <Card image={gabriel} name="Gabriel" age='65' description= "Música: rock, lugar: tranquilo, mulher: loira" interests="Música"/>
            <Card image={luid} name="Luide" age='25' description= "Um lobo solitário que gosta de bater nos outros" interests="Coisas de nerd, lobos"/>
            <Card image={john} name="John" age='21' description= "Boring" interests="painting"/>
            <Card image={juliana} name="Juliana" age='25' description= ":)" interests="Coffe, parks"/>
          </div>
          
        </div>
      
  </>
  
 
  )
}

export default Cards;