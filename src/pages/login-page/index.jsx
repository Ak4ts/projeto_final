import React from "react";
import "./style.css";
import luis from "../../img/luis.jpeg"
import logo from "../../img/logo.png"

function Login() {
  return (
<div class="login-card">
  <div class="login-card-content">
    <div class="header">
      <div class="logo">
        <div><img src={logo} alt="luis" height="200" width="200"/></div>
      </div>
      <a href="/"><h2>Frien<span class="highlight">do</span></h2></a>
      <h3>Making friends has never been this easy!</h3>
    </div>
    <div class="form">
      <div class="form-field username">
        <div class="icon">
          <i class="far fa-user"></i>
        </div>
        <input type="text" placeholder="Username"/>
      </div>
      <div class="form-field password">
        <div class="icon">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Password"/>
      </div>

      <a href="/landing-page">
        <button type="submit">
          Login
        </button>
      </a>
      <div>
        Don't have an account? <a href="/sign-up">Sign Up Now</a>
      </div>
    </div>
  </div>
  <div class="login-card-footer">
    <a href="/recover-account">Forgot password?</a>
  </div>
</div>
  );
}

export default Login;
