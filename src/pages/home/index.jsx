import React from "react";
import './style.css'
import friends from "../../img/friends.jpg"
import friends_cafe from "../../img/cafe.jpg"

function Home() {
  return (
    <div class="grid-wrapper">
     
      <div class="background"><img src={friends}></img></div>
      <div class="background"><img src={friends_cafe}></img></div>
      <aside>
      
      </aside>

    </div>

  )
}

export default Home;
