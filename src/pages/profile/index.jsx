import React from "react";
import Header from "../../components/Header/Header";
import "./style.css";


function Profile() {
  return (
    <>
      <div className="left">
        <Header/>
      </div>
      <div className="right">
        <div className="box-form">
          <div className="overlay friendo-profile-title">      
          <h1 data-text="Friend">Friendo</h1>
          </div>
          <div className="profile-settings">
            <h1>Profile</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;