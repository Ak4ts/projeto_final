import React from "react";
import Header from "../../components/Header/Header";
import FeedItem from "../../components/Feed/FeedItem";
import guy1 from "../../img/guy1.jpg"
import woman1 from "../../img/helen.jpg"
import woman from "../../img/woman1.jpg"
import woman2 from "../../img/laura.jpg"
import gabriel from "../../img/gabs.jpeg"
import "./style.css";


function Notifications() {
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
            <h1>Notifications</h1>
            <div class="ui feed">
              <FeedItem img={guy1} user="John R." desc="added you as a friend" date="Just Now" txt="Hey friend"/>
              <FeedItem img={woman2} user="Lidia H." desc="sent you a friend request" date="3h ago" txt="I saw our interests are similar"/>
              <FeedItem img={woman} user="Juliana J." desc="invited you to go to a restaurant" date="13h ago" txt="Hey! Let's meet"/>
              <FeedItem img={woman1} user="Angela G." desc="invited you to go to the park" date="4d ago" txt="Wanna meet at 4pm?"/>
              <FeedItem img={gabriel} user="Gabriel B." desc="messaged you" date="6d ago" txt="nice to see you yesterday"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications;