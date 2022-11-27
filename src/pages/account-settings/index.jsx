import React from "react";
import './style.css'
import Header from "../../components/Header/Header";

function Profile() {
  return (
  <div>
    <div className="left">
        <div className="list">
          <Header/>
        </div>
      </div>
      <div className="right">
    <div class="row">
      <div class="col-md-12">
      <form className="changes">
        <h1 className="account">Account Settings</h1>
        
        <fieldset>
          
          <legend><span class="number">1</span> Your Basic Info</legend>
        
          <label for="name">Name:</label>
          <input type="text" id="name" className="account" name="user_name"/>
        
          <label for="email">Email:</label>
          <input type="email" id="mail" className="account" name="user_email"/>
       
          <label for="password">Password:</label>
          <input type="password" className="account" id="password" name="user_password"/>
          
        </fieldset>
        <fieldset>  
        
          <legend><span class="number">2</span> Your Profile</legend>
          
          <label>Location:</label>
          <textarea id="insterests" name="interests" placeholder="Country - State - City"></textarea>

          <label for="bio">Bio:</label>
          <textarea id="bio" name="user_bio" placeholder="Interesting things about you"></textarea>
        
          <label>Interests:</label>
          <textarea id="insterests" name="interests" placeholder="What do you like?"></textarea>
          
         </fieldset>
       
        <button className="changes" type="submit">Submit changes</button>
        
       </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile;
