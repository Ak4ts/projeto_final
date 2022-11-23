import React from "react";
import './style.css'

function Profile() {
  return (
  <div>
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
          
         <label for="bio">Bio:</label>
          <textarea id="bio" name="user_bio"></textarea>
        
          <label>Interests:</label>

          <textarea id="insterests" name="interests"></textarea>
          
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
