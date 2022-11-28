import React from "react";
import "./style.css";
import luis from "../../img/logo.png";
import { signin } from "../../api";
import { useNavigate } from "react-router";
import Alert from "../../components/Alert";
import { Send as SendIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";


function Sign_up() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let err = false;
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    err = await signin(
      e.target.username.value,
      e.target.email.value,
      e.target.password.value,
      e.target.password2.value,
      navigate
    )
    setLoading(false)
    console.log(err)
    if (err === true) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, "2000");
    }
  };

  return (
    <div className="login-card">
      <div className="login-card-content">
        <div className="headers">
          <div className="logo">
            <div>
              <img src={luis} alt="luis" height="200" width="200" />
            </div>
          </div>
          <a href="/">
            <h2>
              Friend<span className="highlight">o</span>
            </h2>
          </a>
          <h3>Making friends has never been this easy!</h3>
        </div>
      </div>
      <div className="form">
        <div className="form-field username">
          <div className="icon">
            <i className="fas fa-user"></i>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="form-field username">
                <div className="icon">
                  <i className="fas fa-user"></i>
                </div>
                <input
                  type="text"
                  placeholder="Create a username"
                  name="username"
                />
              </div>
              <div className="form-field email">
                <div className="icon">
                  <i className="fas fa-address-card"></i>
                </div>
                <input
                  type="text"
                  placeholder="Type a valid email"
                  name="email"
                />
              </div>
              <div className="form-field password">
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input
                  type="password"
                  placeholder="Enter a password"
                  name="password"
                />
              </div>
              <div className="form-field password">
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input
                  type="password"
                  placeholder="Re-type password"
                  name="password2"
                />
              </div>
              <LoadingButton
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                color="primary"
                type="submit"
                className = "login-sign_up"
              >
                Sign up 
              </LoadingButton>
            </div>
          </form>
        </div>
        <div className="sign-up-card-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
      <Alert
        text={"Email e/ou usuário já existente no banco de dados!"}
        open={open}
      />
    </div>
  );
}

export default Sign_up;
