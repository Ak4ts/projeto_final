import React from "react";
import "./style.css";
import Header from "../../components/Header/Header";

function RecoverAccount() {
  return (
    <>
      <div className="left">
        <Header/>
      </div>
      <div className="right">
        <div className="cont">
          <h2>Recover Account</h2>
          <fieldset>
          <label for="email">Email:</label>
          <input type="email" id="mail" className="account" name="user_email"/>
          <div className="place-btns">
            <button className="reset" type="submit">Reset password</button>
          </div>

          </fieldset>
        </div>
      </div>
    </>
  )
}

export default RecoverAccount;