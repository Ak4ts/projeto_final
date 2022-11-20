import React from "react";
import './style.css'
import Header from "../../components/header";
import luis from "../../img/luis.png"
import andre from "../../img/andre.png"
import felipe from "../../img/felipe.png"
function Cards() {
  return (
    <>
      <Header/>
      <div className="header">
        <ul>
          <li>one</li>
        </ul>
      </div>
      <div className="all_cards">
      <div class="ui link cards"> 
      <div class="card">
        <div class="image">
          <img src={luis}/>
        </div>
        <div className="content">
          <div className="header">Luis Gabriel</div>
          <div className="meta">
            <a>Friends</a>
          </div>
          <div className="description">
            Luis is an interior designer living in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2013
          </span>
          <span>
            <i className="user icon"></i>
            3375 Friends
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={felipe}/>
        </div>
        <div className="content">
          <div className="header">Felipe</div>
          <div className="meta">
            <span className="date">Coworker</span>
          </div>
          <div className="description">
            Felipe is a personal assistant living in Paris.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2011
          </span>
          <span>
            <i className="user icon"></i>
            4135 Friends
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={andre}/>
        </div>
        <div className="content">
          <div className="header">André</div>
          <div className="meta">
            <a>Coworker</a>
          </div>
          <div className="description">
            André is a copywriter working in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2014
          </span>
          <span>
            <i className="user icon"></i>
            3110 Friends
          </span>
        </div>
      </div>
    </div>
    <div className="ui link cards"> 
      <div className="card">
        <div className="image">
          <img src={luis}/>
        </div>
        <div className="content">
          <div className="header">Luis Gabriel</div>
          <div className="meta">
            <a>Friends</a>
          </div>
          <div className="description">
            Luis is an interior designer living in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2013
          </span>
          <span>
            <i className="user icon"></i>
            3375 Friends
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={felipe}/>
        </div>
        <div className="content">
          <div className="header">Felipe</div>
          <div className="meta">
            <span className="date">Coworker</span>
          </div>
          <div className="description">
            Felipe is a personal assistant living in Paris.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2011
          </span>
          <span>
            <i className="user icon"></i>
            4135 Friends
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={andre}/>
        </div>
        <div className="content">
          <div className="header">André</div>
          <div className="meta">
            <a>Coworker</a>
          </div>
          <div className="description">
            André is a copywriter working in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2014
          </span>
          <span>
            <i className="user icon"></i>
            3110 Friends
          </span>
        </div>
      </div>
    </div>
    </div>
  </>
  
 
  )
}

export default Cards;