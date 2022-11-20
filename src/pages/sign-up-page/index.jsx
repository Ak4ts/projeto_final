import React from "react";
import "./style.css";
import luis from "../../img/logo.png";

function Sign_up() {
  const handleSubmit = (e) => {
    e.preventDefault()
  } 
  return (
    <div class="login-card">
      <div class="login-card-content">
      <div class="headers">
      <div class="logo">
        <div><img src={luis} alt="luis" height="200" width="200"/></div>
      </div>
        <a href="/"><h2>Friend<span class="highlight">o</span></h2></a>
        <h3>Making friends has never been this easy!</h3>
      </div>
   </div>
    <div class="form">
      <div class="form-field username">
        <div class="icon">
          <i class="fas fa-user"></i>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-field username">
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
              <input type="text" placeholder="Create a username" />
            </div>
            <div className="form-field email">
              <div className="icon">
                <i className="fas fa-address-card"></i>
              </div>
              <input type="text" placeholder="Type a valid email" />
            </div>
            <div className="form-field password">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <input type="password" placeholder="Enter a password" />
            </div>
            <div className="form-field password">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <input type="password" placeholder="Re-type password" />
            </div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      <div className="sign-up-card-footer">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
    </div>
  );
}

export default Sign_up;
