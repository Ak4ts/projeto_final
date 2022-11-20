import "./style.css";
import luis from "../../img/luis.jpeg"
function App() {
  return (
<div class="login-card">
  <div class="login-card-content">
    <div class="header">
      <div class="logo">
        <div><img src={luis} alt="luis" height="400" width="200"/></div>
      </div>
      <h2>Frien<span class="highlight">do</span></h2>
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

      <button type="submit">
        Login
      </button>
      <div>
        Don't have an account? <a href="">Sign Up Now</a>
      </div>
    </div>
  </div>
  <div class="login-card-footer">
    <a href="">Forgot password?</a>
  </div>
</div>
  );
}

export default App;
