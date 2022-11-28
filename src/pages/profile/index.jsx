import React from "react";
import './style.css'
import Header from "../../components/Header/Header";
import woman from "../../img/woman1.jpg"
function Profile() {
  return (
    <>
    <div className="left">
      <Header/>
    </div>
    <div className="right">
    <div className="overlay friendo-profile-title">      
      <h1 data-text="Friend">Friendo</h1>
    </div>
    <div className="profile">
    <div class="ui items">
      <div class="item">
        <div class="image">
          <img src={woman}/>
        </div>
      <div class="content">
        <a class="header">Anna Doe, 26</a>
      <div class="meta">
        <span>Description</span>
      </div>
      <div class="description">
        <p>I like places</p>
      </div>
      <div class="extra">
        Interests: soccer, art and coffee
      </div>
      </div>
    </div>
    <div class="ui list">
  <div class="item stats">
    <i class="users icon"></i>
    <div class="content">
      300 friendos
    </div>
  </div>
  <div class="item stats">
    <i class="marker icon"></i>
    <div class="content">
      São Lourenço, MG
    </div>
  </div>
  <div class="item stats">
    <i class="mail icon"></i>
    <div class="content">
      anna.doe@mail.com
    </div>
  </div>
  <div class="item stats">
    <i class="linkify icon"></i>
    <div class="content">
      something here
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
    </>
  )
}

export default Profile;