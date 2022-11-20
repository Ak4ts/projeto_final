import React from "react";
import './style.css'
import luis from "../../img/luis.png"
import andre from "../../img/andre.png"
import felipe from "../../img/felipe.png"
function Cards() {
  return (
    <>
      <div className="content">
      <div class="ui link cards"> 
      <div class="card">
        <div class="image">
          <img src={luis}/>
        </div>
        <div class="content">
          <div class="header">Luis Gabriel</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Luis is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2013
          </span>
          <span>
            <i class="user icon"></i>
            3375 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={felipe}/>
        </div>
        <div class="content">
          <div class="header">Felipe</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Felipe is a personal assistant living in Paris.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2011
          </span>
          <span>
            <i class="user icon"></i>
            4135 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={andre}/>
        </div>
        <div class="content">
          <div class="header">André</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            André is a copywriter working in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2014
          </span>
          <span>
            <i class="user icon"></i>
            3110 Friends
          </span>
        </div>
      </div>
    </div>
    <div class="ui link cards"> 
      <div class="card">
        <div class="image">
          <img src={luis}/>
        </div>
        <div class="content">
          <div class="header">Luis Gabriel</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">
            Luis is an interior designer living in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2013
          </span>
          <span>
            <i class="user icon"></i>
            3375 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={felipe}/>
        </div>
        <div class="content">
          <div class="header">Felipe</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">
            Felipe is a personal assistant living in Paris.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2011
          </span>
          <span>
            <i class="user icon"></i>
            4135 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src={andre}/>
        </div>
        <div class="content">
          <div class="header">André</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">
            André is a copywriter working in New York.
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            Joined in 2014
          </span>
          <span>
            <i class="user icon"></i>
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