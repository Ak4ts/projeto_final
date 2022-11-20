import React from "react";
import "./style.css";
import luis from "../../img/luis.jpeg";
import logo from "../../img/logo.png";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    login(e.target.username.value, e.target.password.value) == true
      ? navigate("/cards")
      : "";
  };

  return (
<div className="login-card">
  <div className="login-card-content">
    <div className="headers">
      <div className="logo">
        <div><img src={logo} alt="luis" height="200" width="200"/></div>
      </div>
      <a href="/"><h2>Friend<span className="highlight">o</span></h2></a>
      <h3>Making friends has never been this easy!</h3>
    </div>
    </div>
    <div className="form">
      <div className="form-field username">
        <div className="icon">
          <i className="far fa-user"></i>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form">
            <div className="form-field username">
              <div className="icon">
                <i className="far fa-user"></i>
              </div>
              <input type="text" placeholder="Username" name="username" />
            </div>
            <div className="form-field password">
              <div className="icon">
                <i className="fas fa-lock"></i>
              </div>
              <input type="password" placeholder="Password" name="password" />
            </div>
            <button type="submit">Login</button>
            <div>
              Don't have an account? <a href="/sign-up">Sign Up Now</a>
            </div>
          </div>
        </form>
      </div>
      <div className="login-card-footer">
        <a href="/recover-account">Forgot password?</a>
      </div>
    </div>
    </div>
  );
}

export default Login;
