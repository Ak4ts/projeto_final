import React from "react";
import "./style.css";


function Profile() {
  return (
    <>
      <div className="left">
        <div className="list">
          <ul>
            <li><a href="/"><i className="fas fa-home"></i></a></li>
            <li><a href="/settings"><i className="fas fa-cogs"></i></a></li>
            <li><a href="/profile"><i className="fas fa-user-circle"></i></a></li>
            <li><a href="/chat"><i className='far fa-comment-dots'></i></a></li>
            <li><a href="/cards"><i className="fas fa-heart"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="box-form">
          <div className="overlay friendo-profile-title">      
          <h1 data-text="Friend">Friendo</h1>
          </div>
          <div className="profile-settings">
            <h1>Profile Settings</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;