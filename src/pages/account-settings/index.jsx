import React from "react";
import "./style.css";


function Profile() {
  return (
    <>
      <div className="left">
        menu
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